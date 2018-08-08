const { ObjectID } = require('mongodb');
var { mongoose } = require('./../server/db/mongoose');
var { Todo } = require('./../server/models/todo');
const { User } = require('../server/models/user');
var id = "6ddb6a568a121ac154ac5e8c83";
if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}
/*
Todo.find({
    _id: id
}).then((todos) => {
    console.log('todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('todo', todo);
});
*/
/*
Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('id not found')
    }
    console.log('todo by id', todo);
}).catch((e) => {
    console.log(e);
});*/


User.findById('5b695a510cfc702ed4e72037').then((user) => {
    if (!user) {
        return console.log('unable to find user')
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
})