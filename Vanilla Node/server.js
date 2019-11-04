const http = require('./Vanilla Node/node_modules/http');

const routes = require('./routes');

const server = http.createServer(routes);

server.listen(3000);  // Server starts to listen
