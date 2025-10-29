const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/profile/:username', authMiddleware, (req, res) => {
  res.json({ message: 'User profile route - to be implemented' });
});

router.put('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'Update profile route - to be implemented' });
});

router.post('/follow/:userId', authMiddleware, (req, res) => {
  res.json({ message: 'Follow user route - to be implemented' });
});

module.exports = router;