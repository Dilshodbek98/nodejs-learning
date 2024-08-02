const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("asosiy sahifa");
    res.end();
  }
  if (req.url === "/api/books") {
    res.write(JSON.stringify(["atomic habits", "clean code", "refactoring"]));
    res.end();
  }
});

// server.on("connection", (socket) => {
//   console.log("yangi bog'lanish");
// });

server.listen(8000);

console.log(`listening to port ${server.address().port}`);
