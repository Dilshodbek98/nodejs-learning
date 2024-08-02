const http = require("node:http");

const server = http.createServer((req, res) => {
  res.write("hello");
});

server.listen(3000, () => console.log("Server is running."));
