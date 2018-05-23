// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to conect to MongoDB server');
  }

  console.log('Connected to server');
  const db = client.db('TodoApp');

  // findOneAndUpdate

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b0477bc9ba359b5856b0508')
  }, {
    $set: {
      name: 'Kirby'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
