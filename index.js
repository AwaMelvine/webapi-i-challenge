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
      res
        .status(500)
        .json({ error: "The users information could not be retrieved." });
    });
});

app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then(user => {
      if (!user) {
        return res
          .status(404)
          .json({ message: "The user with the specified ID does not exist." });
      }
      res.status(200).json({ data: user });
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The user information could not be retrieved." });
    });
});

app.post("/api/users", (req, res) => {
  const { body } = req;
  if (!body.name || !body.bio) {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  }
  User.insert(body)
    .then(id => {
      res.status(201).json({ data: id });
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error while saving the user to the database"
      });
    });
});

app.put("/api/users/:id", (req, res) => {
  const { body } = req;
  const { id } = req.params;

  if (!body.name || !body.bio) {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  }

  User.update(id, body)
    .then(id => {
      if (!id) {
        return res
          .status(404)
          .json({ message: "The user with the specified ID does not exist." });
      }
      res.status(201).json({ data: id });
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The user information could not be modified." });
    });
});

app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  User.remove(id)
    .then(count => {
      if (!count) {
        return res
          .status(404)
          .json({ message: "The user with the specified ID does not exist." });
      }
      res.status(200).json({ data: count });
    })
    .catch(error => {
      res.status(500).json({ error: "The user could not be removed" });
    });
});

app.listen(8080, () => console.log("Server running at localhost:8080"));
