const express = require('express');
require('express-async-errors');
require('./db');
const User = require('./models/user');
const Post = require('./models/post');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');
const { errorHandler, requireAuth } = require('./middlewares');
const bodyParser = require('body-parser');
const PORT = 5000;

const app = express();

app.use(bodyParser.json());
app.use(errorHandler);
app.use(express.static(`${__dirname}/public`));
app.use(cors());


/*--------------------------- USERS QUERIES -------------------------------*/

app.post('/signup', async (req, res) => {
  const newUser = new User(req.body);
  try {
    await newUser.save();
  } catch (e) {
    if (e.code === 11000) {
      res.sendHTTPError(400, 'User already exist');
    }
    throw e;
  }
  res.send(newUser);
});

app.post('/auth', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  const authToken = await user.signIn(password);
  res.send({ authToken, user });
});

app.get('/api/users', requireAuth, async (req, res) => {
  const result = await User.find({});
  res.send(result);
});

app.get('/api/users/me', requireAuth, async (req, res) => {
  const user = await User.findById(req.userId);
  res.json(user);
});
/*-----------------------------------------------------------------*/


/*--------------------------- POSTS QUERIES -------------------------------*/
app.post('/api/posts', requireAuth, async (req, res) => {
  const newPost = req.body;
  newPost.author = req.userId;
  const post = await new Post(newPost);
  res.send(post);
});

app.get('/api/posts', requireAuth, async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
});


/*-----------------------------------------------------------------*/

app.use((req, res, next) => {
  res.status(404).send({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`| INFO | Server is running on ${PORT} port`);
});
