const http = require("node:http");

const routes = require("./req-res2");

const server = http.createServer(routes);

server.listen(5000);

// console.log(http);
// console.log(server);
// console.log(server.address().port);
