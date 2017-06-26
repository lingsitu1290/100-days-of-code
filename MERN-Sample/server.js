// const express = require("express");
import express from "express";
import apiRouter from "./api";
import sassMiddleware from "node-sass-middleware";
import path from "path";

const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

// Set up EJS (Embedded JavaScript) will look for ejs files under a views folder
server.set("view engine", "ejs");

// Root route using ejs
server.get("/", (req, res) => {
  res.render("index",{
    content: "Hello Express and EJS"
  });
});

// Using middleware to render a html file
server.use("/api", apiRouter);
server.use(express.static("public"))

server.listen(8080, () => {
  console.info("Express listening on port 8080");
});
