// src/routes/auth.routes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Rotas públicas
router.post('/register', authController.register);
router.post('/login', authController.login);

// Rotas protegidas
router.get('/verify', authMiddleware, authController.verifyToken);

module.exports = router;


// src/routes/user.routes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');

// Placeholder - implementar controllers depois
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


// src/routes/video.routes.js
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


// src/routes/feed.routes.js
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