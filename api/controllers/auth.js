const authService = require('@/services/auth');
const userService = require('@/services/user');

async function signUp(req, res) {
  try {
    const userDb = await userService.createUser(req.body);
    const currentUser = await authService.createToken(userDb);
    res.status(201).json({
      success: true,
      message: 'User is created',
      currentUser,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

async function signIn(req, res) {
  console.log(req);
  try {
    const userDb = await authService.login(req.body);
    const currentUser = await authService.createToken(userDb);
    res.status(200).json({
      success: true,
      message: 'User is signed in',
      currentUser,
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