// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to conect to MongoDB server');
  }

  console.log('Connected to server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b04772373c168b5388c2ff9')
  // }).toArray().then((docs) => {
  //   console.log('Todos: ')
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });

  db.collection('Users').find({
    name: 'Olivia'
  }).toArray().then((docs) => {
    console.log(docs);
  }, (err) => {
    console.log('Error', err)
  });


  // client.close();
});
