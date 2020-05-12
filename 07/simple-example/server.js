const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const PORT = 5000;

const app = express();

let count = 0;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const loggerMiddleware = (req, res, next) => {
  console.log(req.originalUrl, count++);
  next();
};

const errorHandler = (req, res, next) => {
  res.sendHTTPError = (status, message) => {
    res.status(status).json({ message });
  };
  next();
};

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.get('/echo', (req, res) => {
  const query = req.query;
  console.log(query);
  res.send(query);
});

app.get('/users', (req, res) => {
  const users = JSON.parse(fs.readFileSync('./users.json'));
  // res.sendHTTPError(401, 'Password is not correct!');
  res.json(users);
});

app.post('/users', loggerMiddleware, (req, res) => {
  const users = JSON.parse(fs.readFileSync('./users.json'));
  const newUser = req.body;
  users.push(newUser);
  fs.writeFileSync('./users.json', JSON.stringify(users), 'utf-8');
  res.send({ message: 'User has been added' });
});


app.use((req, res) => {
  res.status(404).send({ message: 'Request not found!' });
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on port ${PORT}`);
});
