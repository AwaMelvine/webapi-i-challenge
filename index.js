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

app.listen(8080, () => console.log("Server running at localhost:8080"));
