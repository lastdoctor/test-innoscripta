const bcrypt = require('bcrypt');
const User = require('@/models/user');


async function createUser(data) {
  try {
    const { email, password } = data;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = { email: email, password: hashedPassword };
    const user = await User.create(newUser);
    return user;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  createUser,
};