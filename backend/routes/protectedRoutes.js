const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
// Пример защищенного маршрута
router.get('/protected', authMiddleware, (req, res) => {
  res.send('Это защищенный маршрут');
});

module.exports = router;