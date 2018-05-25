const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    if (err) {
      return console.log(err);
    }

    console.log(hash);
  });
});

let hashedPassword = '$2a$10$tiXamgJVO8p7d.6.b1ER8O7Mr/T5Y9oabKI9.Jw0zo6B84VxzG30m';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});
