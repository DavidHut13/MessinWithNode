const { appendFile } = require('fs');
const {mongoConnect} = require('./database');
const express = require('express');
const getDb = require('./database').getDb;
 const app = express()


mongoConnect(() => {
    console.log('Connected')
    app.listen(3000)
});
// const db = getDb();
// db.collection('TestData').InsertOne({Event: 'Test Game', id: 1234})

