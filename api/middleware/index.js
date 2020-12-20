module.exports = (app) => {
  const express = require('express');
  const compression = require('compression');
  const morgan = require('morgan');
  require('dotenv').config();
  const dbConnection = require('@/middleware/dbConnect');

  app.use(compression());
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};