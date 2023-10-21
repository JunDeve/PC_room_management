// const express = require('express');
// const router = express.Router();
// const app = express();
// const fetch = require('node-fetch');

// const apiKey = "test_ck_XZYkKL4Mrj9Y4j0ONa0EV0zJwlEW";
// const tossApiUrl = "https://pay.toss.im/api/v2/payments";

// app.use(express.json());

// app.post('/processPayment', async (req, res) => {
//   const paymentRequest = {
//     amount: 10000,
//     amountTaxFree: 0,
//     productDesc: '테스트 결제',
//     apiKey: apiKey,
//     autoExecute: true,
//     resultCallback: 'http://호스팅중이아니라못받아/callback',
//     callbackVersion: 'V2',
//     retUrl: 'http://호스팅중이아니라못받아/ORDER-CHECK?orderno=1',
//     retCancelUrl: 'http://호스팅중이아니라못받아/close',
//   };

//   try {
//     const response = await fetch(tossApiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(paymentRequest),
//     });

//     if (response.ok) {
//       const responseBody = await response.json();
//       res.json(responseBody);
//     } else {
//       res.status(500).json({ error: 'Payment request failed' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred while making the payment request' });
//   }
// });

// CCTV
// router.get('/traffic-cameras', async (req, res) => {
//   try {
//     const apiUrl = 'http://api.data.go.kr/openapi/tn_pubr_public_unmanned_traffic_camera_api';
//     const apiKey = 'teKuFbJqBcoDR0iTdJnVsID8EskiAD1lAcBGU86KICWSoq+NUEk+c1NnCZG/y+c+q1UR7Dr8WuFGoFTk+mux9w==';

//     const params = {
//       pageNo: 1,
//       numOfRows: 4,
//       type: 'json',
//     };

//     const response = await axios.get(apiUrl, {
//       params: {
//         serviceKey: apiKey,
//         ...params,
//       },
//     });

//     res.json(response.data);
//   } catch (error) {
//     console.error('CCTV API 요청 오류:', error);
//   }
// });

// module.exports = router;

//프론트쪽에서 get 요청보내서 post랑 연결하면 끝