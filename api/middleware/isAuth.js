const authService = require('@/services/auth');

async function isAuth(req, res, next) {
  try {
    const authHeader = req.get('Authorization');
    const token = await authService.getToken(authHeader);
    const decodedToken = authService.decodeToken(token);
    req.userId = decodedToken.userId;
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = isAuth;