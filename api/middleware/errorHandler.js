module.exports = function(app) {
  app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error);
  });

  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  });

  return app;
};