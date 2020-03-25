const express = require('express');
const bodyParser = require('body-parser')

//lowdb
// var db = require('./db')

var userRoute = require('./routes/user.route');
// var homePage = require('./routes/home.route');

const post = 3000;
const app = express();
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));


app.set('view engine', 'pug');
// app.set('views', './views');

app.use('/users', userRoute);
// app.use('/', homePage);

app.listen(post, function(){
    console.log('Server Listening on ' + post);
});

