var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

var port = 3000;

// app.get('/', function(req, res){
//     res.send('<h1>Hello Express Js</h1>');
// });

// Template Engine
app.get('/', function(req, res){
    res.render('index', {
        name: 'AAA'
    });
});

app.get('/users', function(req,res){
    res.render('users/index', {
        users: [
            {id: 1, name: 'Doanh'},
            {id: 2, name: 'Kieu'}
        ]
    });
});


app.listen(port, function(){
    console.log('Server listening on port 3000');
});

