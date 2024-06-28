const express = require('express');
const router = express.Router();

// 模拟 404 Not Found 错误
router.get('/not-found', (req, res) => {
  res.status(404).send('Not Found');
});

// 模拟 500 Internal Server Error 错误
router.get('/internal-server-error', (req, res) => {
  res.status(500).send('Internal Server Error');
});

// 模拟超时
router.get('/timeout', (req, res) => {
  setTimeout(() => {
    res.send('This should timeout');
  }, 5000); // 延迟 5 秒响应，确保客户端超时
});

// 模拟 401 Unauthorized 错误
router.get('/unauthorized', (req, res) => {
  res.status(401).send('Unauthorized');
});

// 模拟 403 Forbidden 错误
router.get('/forbidden', (req, res) => {
  res.status(403).send('Forbidden');
});

// 模拟 400 Bad Request 错误
router.get('/bad-request', (req, res) => {
  res.status(400).send('Bad Request');
});

// 模拟 429 Too Many Requests 错误
router.get('/too-many-requests', (req, res) => {
  res.status(429).send('Too Many Requests');
});

module.exports = router;
