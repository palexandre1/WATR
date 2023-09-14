require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use('/', router);

app.listen(port, function() {
  console.log(`App running on port ${port}`)
})