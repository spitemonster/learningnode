const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
let port = 8888;

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then((todo) => {
    res.send(todo);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (err) => {
    console.log(err);
  });
});

app.get('/todos/:id', (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(400).send();
  }

  Todo.findById(id).then((todo) => {
    res.send({todo});
  }, (err) => {
    res.status(400).send();
    console.log(err);
  });
});

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});

module.exports = {app};
