const authService = require('@/services/auth');
const userService = require('@/services/user');

async function signUp(req, res) {
  try {
    const user = await userService.createUser(req.body);
    const tokens = await authService.createToken(user);
    res.status(201).json({
      success: true,
      message: 'User is created',
      tokens,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

async function signIn(req, res) {
  try {
    const user = await authService.login(req.body);
    const tokens = await authService.createToken(user);
    res.status(200).json({
      success: true,
      message: 'User is signed in',
      tokens,
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      message: e.message,
    });
  }
}

async function getUserInfo(req, res) {
  try {
    if (req.userId) {
      res.status(200).json({
        success: true,
        message: 'User is found',
        userId: req.userId,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'User is not found',
      });
    }
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
}

module.exports = {
  signUp,
  signIn,
  getUserInfo,
};