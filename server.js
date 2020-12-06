
require('dotenv').config()
const {port, DATABASE_URL}= process.env;

const express = require('express');

// express app
const app =express();

// import mongoose
const mongoose = require('mongoose');


// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
// const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('connected to database'))
var http = require('http'),
   open = require('open'),
   server;
server = http.createServer(function (req, res) {
           res.writeHead(200, {'Content-Type': 'text/plain'});
           res.end('Hello World\n');
        });
        
server.listen(port, 'localhost',function(){
    console.log('Launching the browser!');
    console.log(`Server is running on http://localhost:${port}`);
    console.log(`${DATABASE_URL}`)
    open(`http://localhost:${port}`);
});



// app.listen(port, ()=>{
//   console.log(`Server is running on port ${port}`);
//   console.log(`${DATABASE_URL}`)
// })