﻿//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    /*
    db.collection('Todos').find({ _id: new ObjectID('5b6911941b7ce162b8004933')}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch to dos', err);
        });*/

    /*
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch to dos', err);
    });*/
    db.collection('Users').find().toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    });

    db.collection('Users').find().count().then((count) => {
        console.log(`Users count: ${count}`);
    }, (error) => {
        console.log('error', error);
    });
    //  client.close();

});