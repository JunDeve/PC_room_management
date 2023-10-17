const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const mysql = require('mysql2/promise');
const fs = require('fs').promises;
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('접속완');
});

const dbConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'pc_management',
    port: 3306,
};

async function runSQLFile(filePath) {
    try {
        const sqlContent = await fs.readFile(filePath, 'utf-8');
        const connection = await mysql.createConnection(dbConfig);

        await connection.execute(sqlContent);
        connection.end();
        console.log(`SQL : '${filePath}' 실행 완료`);
    } catch (err) {
        console.error(`SQL : '${filePath}' 실행 실패:`, err);
    }
}

async function initializeDatabase() {
    try {
        console.log('-------------------------------------------------')
        await runSQLFile('../DB/drop_table_manager.sql');
        await runSQLFile('../DB/drop_table_users.sql');
        await runSQLFile('../DB/drop_table_device.sql');
        await runSQLFile('../DB/create_table_manager.sql');
        await runSQLFile('../DB/create_table_users.sql');
        await runSQLFile('../DB/create_table_device.sql');
        await runSQLFile('../DB/insert_data_manager.sql');
        await runSQLFile('../DB/insert_data_users.sql');
        await runSQLFile('../DB/insert_data_device.sql');
        console.log('----------[ 모든 SQL 파일 실행 완료 ] -----------');
    } catch (err) {
        console.error('에러 발생:', err);
    }
}

async function startServer() {
    try {
        await initializeDatabase();
        app.listen(port, () => {
            console.log(`>>>> 서버열림 : http://localhost:${port} <<<<`);
        });
    } catch (err) {
        console.error('에러 발생:', err);
    }
}

startServer();

app.post('/login', async (req, res) => {
    console.log('POST 요청 도착');

    const { user_id, user_pwd } = req.body;

    try {
        const connection = await mysql.createConnection(dbConfig);

        const [managerRows] = await connection.execute(
            'SELECT * FROM manager WHERE user_id = ? AND user_pwd = ?',
            [user_id, user_pwd]
        );

        const [userRows] = await connection.execute(
            'SELECT * FROM users WHERE user_id = ? AND user_pwd = ?',
            [user_id, user_pwd]
        );

        connection.end();

        if (managerRows.length > 0) {
            res.json({
                redirect: 'Manager',
                message: '관리자님 안녕하세요!',
                userInfo: managerRows[0],
            });
        } else if (userRows.length > 0) {
            res.json({
                redirect: 'User',
                message: `${user_id} 님 안녕하세요!`,
                userInfo: userRows[0]
            });
        } else {
            res.json({ message: '로그인 실패: 잘못된 사용자 이름 또는 비밀번호' });
        }
    } catch (error) {
        console.error('데이터베이스 오류:', error);
        res.status(500).json({ message: '데이터베이스 오류' });
    }
});

app.get('/api/charge', async (req, res) => {
    try {
        const response = {
            success: true,
            message: '충전이 성공적으로 처리되었습니다.',
        };
        res.json(response);
    } catch (error) {
        console.error('충전 처리 중 오류 발생:', error);
        res.status(500).json({ success: false, message: '충전 처리 중 오류 발생' });
    }
});

