const express = require('express');
const path = require('path');
const useMiddleware = require('@/middleware/index');
const errorMiddleware = require('@/middleware/errorHandler');
const authRouter = require('@/routes/auth');
const productsRouter = require('@/routes/products');

const app = express();

useMiddleware(app);

app.use('/api/auth', authRouter);
app.use('/api', productsRouter);

// // For deploy
// app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
// });
// //

errorMiddleware(app);

module.exports = app;

