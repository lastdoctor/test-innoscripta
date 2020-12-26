module.exports = (app) => {
  const express = require('express');
  const cors = require('cors');
  const compression = require('compression');
  const morgan = require('morgan');
  require('dotenv').config();
  const dbConnection = require('@/middleware/dbConnect');

  app.use(cors());
  app.use(compression());
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};