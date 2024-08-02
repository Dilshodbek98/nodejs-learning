const fs = require("node:fs");

const httpHandler = (req, res) => {
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>enter message</title></head>");
    res.write(
      "<body><form method='POST' action='/message'><input name='dilshodbek'> <button type='submit'>submit</button></form></body>",
    );
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk, "chunk");
    });

    return req.on("end", () => {
      const parsedData = Buffer.concat(body).toString();
      const message = parsedData.split("=")[1];

      fs.writeFile("hello.txt", message, (err) => {
        console.log(parsedData, "buffer");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>hello</title></head>");
  res.write("<body><h1>hello</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = httpHandler;
