const express = require('express');
const router = express.Router();

// CCTV
router.get('/traffic-cameras', async (req, res) => {
  try {
    const apiUrl = 'http://api.data.go.kr/openapi/tn_pubr_public_unmanned_traffic_camera_api';
    const apiKey = 'teKuFbJqBcoDR0iTdJnVsID8EskiAD1lAcBGU86KICWSoq+NUEk+c1NnCZG/y+c+q1UR7Dr8WuFGoFTk+mux9w==';

    const params = {
      pageNo: 1,
      numOfRows: 4,
      type: 'json',
    };

    const response = await axios.get(apiUrl, {
      params: {
        serviceKey: apiKey,
        ...params,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('CCTV API 요청 오류:', error);
  }
});

module.exports = router;

//프론트쪽에서 get 요청보내서 post랑 연결하면 끝