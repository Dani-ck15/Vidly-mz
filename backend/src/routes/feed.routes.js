const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/for-you', authMiddleware, (req, res) => {
  res.json({ message: 'For You feed route - to be implemented' });
});

router.get('/following', authMiddleware, (req, res) => {
  res.json({ message: 'Following feed route - to be implemented' });
});

module.exports = router;