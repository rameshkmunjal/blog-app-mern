
const express=require('express');
const app=express();
const http=require('http');
const mongoose=require('mongoose');
const routeIndex=require('./routes/blog');
const bodyParser=require('body-parser');


const server=http.createServer(app);


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/', routeIndex);
app.get('/', (req, res)=>{app.use('/', routeIndex);
    console.log("blog app project started");
    res.send("all routes api is here");
})

server.listen(3000);
server.on('listening', onListening);
server.on('error', onError);

function onListening(){
    console.log("Server is listening");  
    let db=mongoose.connect("mongodb://127.0.0.1:27017/blogDB", {useNewUrlParser:true})  
}

function onError(){
    console.log("Error happened in server connection");
}

mongoose.connection.on('open', function(err){
    if(err){
        console.log("An error occurred in mongoose connection open");
    } else {
        console.log("mongoose connection set up successfully")
    }

})

mongoose.connection.on('error', function(err){
    console.log("some error happened in mongoose connection", err);
})