//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


var obj = new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    /*
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (eer, result) => {
        if (err) {
            return console.log('Unable to insert to do', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });*/

    //insert new doc into Users (name,age,locaton)
    /*
    db.collection('Users').insertOne({
        name: 'Andrew',
        age: 25,
        location: 'Philadelphia'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }
        console.log(result.ops);
    });
    */
    client.close();

});