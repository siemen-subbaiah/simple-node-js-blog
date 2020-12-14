const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const router = require('./routes/blogRoutes');
require('dotenv').config();

//INIT EXPRESS!
const app = express();

const dbUri = process.env.DB_INFO;

//INIT DB!
mongoose
  .connect(dbUri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((res) => app.listen(3000))
  .catch((err) => console.log(err));

//INIT VIEW ENGINE!
app.set('view engine', 'ejs');

//Body Parser Middleware!
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//MIDDLEWARE (STATIC!)
app.use(express.static(path.join(__dirname, 'public')));

//INIT ROUTER!
app.use('/blogs', router);
