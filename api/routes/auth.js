const { Router } = require('express');
const authController = require('@/controllers/auth');
const isAuth = require('@/middleware/isAuth');

const router = Router();

router.post('/signup', authController.signUp);
router.post('/signin', authController.signIn);
router.get('/profile',isAuth, authController.getUserInfo);

module.exports = router;
