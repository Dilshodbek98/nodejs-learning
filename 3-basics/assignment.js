const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<body>");
    res.write("<h1>hello from server</h1>");
    res.write(
      `<form action="/create-user" method="POST"><input name="username" type="text"> <button type="submit">send</button></form>`,
    );
    res.write("</body>");
    return res.end();
  }

  if (req.url === "/users") {
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>user 1</li>");
    res.write("<li>user 2</li>");
    res.write("<li>user 3</li>");
    res.write("</ul>");
    res.write("</body>");
    return res.end();
  }
  if (req.url === "/create-user" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedData = Buffer.concat(body).toString();

      fs.writeFile("user.txt", parsedData, () => {
        res.statusCode = 302;
        res.end();
      });
    });
  }
  res.write("<html>");
  res.write("<head><title>assignment</title></head>");
  res.write("<body>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
