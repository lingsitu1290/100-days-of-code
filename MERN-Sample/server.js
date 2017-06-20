// const express = require("express");
import express from "express";
import apiRouter from './api';
// import fs from "fs";

const server = express();

server.get('/',(req, res) => {
  res.send('Hello');
});

// Using middleware to render a html file
server.use('/api', apiRouter);
server.use(express.static("public"))

// Rendering a html file
// server.get('/about.html',(req, res) => {
//   fs.readFile("./about.html", (err,data)=>{
//     res.send(data.toString());
//   });
// });

server.listen(3000, () => {
  console.info('Express listening on port 3000');
});
