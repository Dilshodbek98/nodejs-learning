const express = require("express");
const Joi = require("joi");
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Welcome");
});

app.post("/user", function (req, res) {
  const bookSchema = Joi.object({
    name: Joi.string().required().min(10),
  });

  const { error, value } = bookSchema.validate(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
  }

  res.status(200).send("ok");
});

app.listen(3000);
