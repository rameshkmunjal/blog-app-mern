/*dependencies */
const express=require('express');
const app=express();
const http=require('http');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
/*including files*/
const routeIndex=require('./routes/blog');


/* creating server */
const server=http.createServer(app);

/*middlewares*/
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/', routeIndex);

/* check - server listening or not*/
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

/* check - mongodb connection set up or not */
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