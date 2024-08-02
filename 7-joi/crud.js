const express = require("express");
const Joi = require("joi");

const courses = [
  { id: 1, title: "Frontend" },
  { id: 2, title: "Backend" },
  { id: 3, title: "Devops" },
  { id: 4, title: "Data science" },
];

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello student");
});

//read
app.get("/api/courses", (req, res) => {
  res.status(200).send(courses);
});

//create
app.post("/api/courses", (req, res) => {
  const error = checkBody(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  courses.push(req.body);
  res.status(201).send(courses);
});

//update
app.put("/api/courses/:id", (req, res) => {
  const error = checkBody(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  let selectedCourse = courses.find((c) => c.id == req.params.id);
  selectedCourse = req.body;
  res.status(201).send(selectedCourse);
});

//delete
app.delete("/api/courses/:id", (req, res) => {
  courses.splice(req.params.id - 1, 1);
  res.status(200).send(courses);
});

function checkBody(body) {
  const schema = Joi.object({
    id: Joi.number().required(),
    title: Joi.string().required().min(4),
  });
  const { error } = schema.validate(body);
  return error;
}

app.listen(4000, () => console.log("server is running"));
