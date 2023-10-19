const express = require('express');
const router = express.Router();
const axios = require('axios');

const serviceAppAdminKey = '0d9836d886b0b69c64be35c4df4d7a65';

const paymentReady = async () => {
  const url = 'https://kapi.kakao.com/v1/payment/ready';
  const headers = {
    Authorization: `KakaoAK ${serviceAppAdminKey}`,
    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
  };
  const data = {
    cid: 'TC0ONETIME',
    partner_order_id: 'TEST_ORDER_001',
    partner_user_id: 'TEST_USER_001',
    item_name: 'TEST_PRODUCT',
    quantity: 1,
    total_amount: 3000,
    vat_amount: 200,
    tax_free_amount: 0,
    approval_url: 'http://10.0.2.2:3000/payment/success',
    cancel_url: 'http://10.0.2.2:3000/payment/cancel',
    fail_url: 'http://10.0.2.2:3000/payment/fail',
  };

  try {
    const response = await axios.post(url, data, { headers });
    const { tid, android_app_scheme, ios_app_scheme } = response.data;
    return { tid, android_app_scheme, ios_app_scheme };
  } catch (error) {
    console.error('Payment ready error:', error);
    return null;
  }
};

router.post('/payment', async (req, res) => {
  const { android_app_scheme, ios_app_scheme } = await paymentReady();

  if (android_app_scheme && ios_app_scheme) {
    // 여기에서 프론트엔드로 이 스킴 값을 전달하거나 프론트엔드에서 이를 사용하여 카카오페이 결제 페이지를 열도록 지시합니다.
    // 이 부분은 프론트엔드에서 다루어야 합니다.
    res.status(200).json({ android_app_scheme, ios_app_scheme });
  } else {
    res.status(500).send('Payment 게시실패');
  }
});



router.get('/payment', (req, res) => {
  res.send('GET 요청이 정상적으로 처리되었습니다.');
});

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