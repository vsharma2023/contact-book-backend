const express = require("express");
const app = express();
const port = 8080;
const pool = require('./db');
const contactRoute = require('./routes/contact.route');

app.use(express.json());
app.use('/',contactRoute);
pool.connect((err) => {
  if (err) {
    console.log("eroor connecting to the database");
  } else {
    console.log("connected to the database");
  }
});

app.listen(port, (req, res) => {
  console.log(`sever is connect and running on port ${port}`);
});
