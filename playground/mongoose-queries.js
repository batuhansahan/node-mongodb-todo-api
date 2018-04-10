const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var Uid = '5acc97d3078cd0e00dd2d6d8';

var id = '5accaf3273671a20032d783e';

if(!ObjectID.isValid(Uid)){
  return console.log('Not valid ID');
}

User.find({
  _id: Uid
}).then((users) => {
  console.log('Users', users);
});

User.findOne({
  _id: Uid
}).then((user) => {
  console.log('User', user);
});


User.findById(Uid).then((user) => {
  if(!user){
    return console.log('id not found');
  }
  console.log('User by ID', user);
}).catch((e) => console.log(e));

// if(!ObjectID.isValid(id)){
//   return console.log('ID not valid');
// };
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));
