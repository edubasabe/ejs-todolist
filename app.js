const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
  const today = new Date();
  if (today.getDay() === 6 || today.getDay() === 0) {
    res.send("<h1>Yay! It's the weeekend!</h1>");
  } else {
    res.send("<h1>Boo I have to work</h1>");
  }
});

app.listen(8080, () => {
  console.log("Server started at port 8080");
});