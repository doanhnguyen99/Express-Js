const express = require('express');
const bodyParser = require('body-parser')

//lowdb
// var db = require('./db')

var userRoute = require('./routes/user.route')

const post = 3000;
const app = express();
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.set('view engine', 'pug');
app.set('views', './views');

// app.get('/', function(req, res){
//     res.render('index', {
//         name: 'Doanh'
//     });
// });

app.use('/users', userRoute);

app.listen(post, function(){
    console.log('Server Listening on ' + post);
});

