const express = require("express");
const User = require("./data/db");
const app = express();

app.use(express.json());

app.get("/api/users", (req, res) => {
  User.find()
    .then(users => {
      res.status(200).json({ data: users });
    })
    .catch(error => {
      console.log(error);
    });
});

app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then(user => {
      res.status(200).json({ data: user });
    })
    .catch(error => {
      console.log(error);
    });
});

app.post("/api/users", (req, res) => {
  const { body } = req;
  User.insert(body)
    .then(id => {
      res.status(201).json({ data: id });
    })
    .catch(error => {
      console.log(error);
    });
});

app.put("/api/users/:id", (req, res) => {
  const { body } = req;
  const { id } = req.params;
  User.update(id, body)
    .then(id => {
      res.status(201).json({ data: id });
    })
    .catch(error => {
      console.log(error);
    });
});

app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  User.remove(id)
    .then(count => {
      res.status(200).json({ data: count });
    })
    .catch(error => {
      console.log(error);
    });
});

app.listen(8080, () => console.log("Server running at localhost:8080"));
