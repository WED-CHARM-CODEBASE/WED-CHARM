// imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// important calls
const app = express();
dotenv.config();

// declarations
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST;
const MONGO_URL = process.env.MONGO_URL;

// api
app.get('/', (req, res) => {
  return res.send('Hii From Server');
});

// db connect and server listen
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DB is Connected');
    app.listen(PORT, () => {
      console.log(`Server is Running at http://${HOST}:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
