const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://korede:korede@subjects-dclpu.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('connected', () => console.log('Mongoose is connected!!!'))





//MiddleWare
app.use(morgan('tiny'));
app.use(express.json());   
app.use(express.urlencoded({extended: false}));
app.use('/test', routes);

//Listening to a port
app.listen(PORT);