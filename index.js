var http=require('http');
var express=require('express');
var logger=require('./logging/logger');

const app=express();
app.use(logger);

app.get('/',(req,res) =>{
res.send('Welcome to my First Node Project');
});

app.get('/about',(req,res)=> {
    res.send('I am Beginner in node Js');
});

const server=http.createServer(app);
server.listen(3000);
console.log('My express server is working'); 