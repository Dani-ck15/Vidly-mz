const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/upload', authMiddleware, (req, res) => {
  res.json({ message: 'Upload video route - to be implemented' });
});

router.get('/:videoId', (req, res) => {
  res.json({ message: 'Get video route - to be implemented' });
});

router.post('/:videoId/like', authMiddleware, (req, res) => {
  res.json({ message: 'Like video route - to be implemented' });
});

router.post('/:videoId/comment', authMiddleware, (req, res) => {
  res.json({ message: 'Comment on video route - to be implemented' });
});

module.exports = router;