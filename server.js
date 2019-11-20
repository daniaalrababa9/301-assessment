'use strict'
require('dotenv').config();
const express =require('express');
const cors =require('cors');
const server =express();
const PORT=process.env.PORT;

server.use('/', function(req, res) {
    res.status(200).send('Home Page');
  });


server.use('*',function(req, res){
    res.status(404).send('Not Found ')

});

server.listen(PORT, function() {
  console.log('Example app listening on port ',PORT);
});
