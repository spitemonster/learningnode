const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

let prettyPrint = (item) => {
  console.log(JSON.stringify(item, undefined, 2));
};

let id = '5b05a134b8206dd474934269';

if (!ObjectID.isValid(id)) {
  console.log('ID Invalid');
  return;
}

// Todo.find({_id: id}).then((todo) => console.log(todo));

// Todo.findOne({_id: id}).then((todo) => console.log(todo));

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//
//   console.log(todo);
// }).catch((err) => console.log(err));

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }

  prettyPrint(user);
}).catch((err) => console.log(err));
