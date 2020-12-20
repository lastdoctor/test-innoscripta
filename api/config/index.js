const merge = require('lodash/merge');
const env = process.env.NODE_ENV || 'development';

const baseConfig = {
  env,
  isDev: env === 'development',
  PORT: 4000,
  secrets: {
    accessTokenSecret: process.env.JWT_SECRET_ACCESS,
    accessTokenSecretExp: '30m',
    refreshTokenSecret: process.env.JWT_SECRET_REFRESH,
    refreshTokenSecretExp: '60d',
  },
};

let envConfig = {};

switch (env) {
  case 'dev':
  case 'development':
    envConfig = require('./dev').devConfig;
    break;
  case 'test':
  case 'testing':
    envConfig = require('./testing').testConfig;
    break;
  case 'prod':
  case 'production':
    envConfig = require('./prod').prodConfig;
    break;
  default:
    envConfig = require('@config/dev').devConfig;
}
module.exports = merge(baseConfig, envConfig);