const express = require("express");

const server = express();

server.get('/',(req, res) => {
  res.send('Hello');
});

server.listen(3000, () => {
  console.info('Express listening on port 3000');
});
