const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('@/models/user');
const { option, secrets } = require('@/config');


async function login(data) {
  try {
    const { email, password } = data;
    const user = await User.findOne({ email });
    if (!user) throw new Error('Email is not correct');
    const isSamePassword = bcrypt.compareSync(password, user.password);
    if (isSamePassword) throw new Error('Password is not correct');
    return user;
  } catch (e) {
    throw e;
  }
}

async function createToken(data) {
  try {
    const accessToken = jwt.sign(
      {
        email: data.email,
        userId: data._id.toString(),
      },
      secrets.accessTokenSecret,
      { expiresIn: secrets.accessTokenSecretExp },
    );
    const refreshToken = jwt.sign(
      {
        email: data.email,
        userId: data._id.toString(),
      },
      secrets.refreshTokenSecret,
      { expiresIn: secrets.refreshTokenSecretExp },
    );
    await User.findOneAndUpdate(data.email, { refreshToken });
    return { tokenType: 'bearer', accessToken, refreshToken };
  } catch (e) {
    throw e;
  }
}

async function findUserByToken(data) {
  try {
    const { refreshToken } = data;
    return await User.findOne({ refreshToken });
  } catch (e) {
    throw e;
  }
}


async function getToken(data) {
  try {
    const token = data.split(' ')[1];
    const bannedToken = await tokenCheckInBlackLit(token);
    if (bannedToken) throw new Error('Token is banned');
    return token;
  } catch (e) {
    throw new Error('Not authenticated.');
  }
}

async function tokenCheckInBlackLit(token) {
  try {
    const isTokenExist = await Token.findOne({ token });
    return isTokenExist;
  } catch (e) {
    throw e;
  }
}

async function decodeToken(token) {
  try {
    const decodedToken = jwt.verify(token, secrets.accessTokenSecret);
    return decodedToken;
  } catch (e) {
    throw (e.statusCode = 500);
  }
}

async function banToken(tokenAccess) {
  try {
    const token = await Token.create({ tokenAccess });
    return token;
  } catch (e) {
    throw e;
  }
}

module.exports = {
  login,
  createToken,
  getToken,
  decodeToken,
  banToken,
};
