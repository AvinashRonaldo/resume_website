var http=require('http');
var express=require('express');
var logger=require('./logging/logger');
var form = require(__dirname+'/controllers/form');

const app=express();
app.listen(3000,() => console.log("Server is up and running"));
app.use(logger);
app.set('view engine','ejs');

app.get('/',(req,res) =>{
//res.send('Welcome to my First Node Project');
res.render('index');
});

app.get('/about',(req,res)=> {
    res.send('I am Beginner in node Js');
});

