const express = require('express');
const router = express.Router();
const axios = require('axios');

const serviceAppAdminKey = '0d9836d886b0b69c64be35c4df4d7a65';

// 결제 준비하기 API
const paymentReady = async () => {
  const url = 'https://kapi.kakao.com/v1/payment/ready';
  const headers = {
    Authorization: `KakaoAK ${serviceAppAdminKey}`,
    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
  };
  const data = {
    cid: 'TEST_CID',
    partner_order_id: 'TEST_ORDER_001',
    partner_user_id: 'TEST_USER_001',
    item_name: 'TEST_PRODUCT',
    quantity: 1,
    total_amount: 2200,
    vat_amount: 200,
    tax_free_amount: 0,
    approval_url: 'https://your-site.com/payment/success',
    cancel_url: 'https://your-site.com/payment/cancel',
    fail_url: 'https://your-site.com/payment/fail',
  };

  try {
    const response = await axios.post(url, data, { headers });
    const { tid, next_redirect_app_url, next_redirect_mobile_url, next_redirect_pc_url } = response.data;
    return { tid, next_redirect_app_url, next_redirect_mobile_url, next_redirect_pc_url };
  } catch (error) {
    console.error('Payment ready error:', error);
    return null;
  }
};

// 결제 승인 요청하기 API
const paymentApprove = async (tid, pgToken) => {
  const url = 'https://kapi.kakao.com/v1/payment/approve';
  const headers = {
    Authorization: `KakaoAK ${serviceAppAdminKey}`,
    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
  };
  const data = {
    cid: 'TC0ONETIME',
    tid: 'T1234567890123456789',
    partner_order_id: 'TEST_ORDER_001',
    partner_user_id: 'TEST_USER_001',
    pg_token: 'TOK_A1B2C3D4E5F6',
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error('Payment 연결오류:', error);
    return null;
  }
};

router.post('/payment', async (req, res) => {
  const { next_redirect_pc_url, next_redirect_mobile_url, next_redirect_app_url } = await paymentReady();

  if (next_redirect_pc_url) {
    res.redirect(next_redirect_pc_url);
  } else if (next_redirect_mobile_url) {
    res.redirect(next_redirect_mobile_url);
  } else if (next_redirect_app_url) {
    res.redirect(next_redirect_app_url);
  } else {
    res.status(500).send('Payment initiation failed');
  }
});

router.get('/payment', (req, res) => {
  res.send('GET 요청이 정상적으로 처리되었습니다.');
});


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