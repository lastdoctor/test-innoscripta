require('module-alias/register'); // alias path

const http = require('http');
const config = require('@/config');
const PORT = process.env.PORT || config.PORT;
const app = require('@/app');

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server has been started in PORT ${PORT}`);
});