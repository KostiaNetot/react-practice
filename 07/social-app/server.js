const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');
const { errorHandler, requireAuth } = require('./middlewares');
const bodyParser = require('body-parser');
const getDb = require('./db');
const PORT = 5000;

const app = express();

app.use(bodyParser.json());
app.use(errorHandler);
app.use(express.static(`${__dirname}/public`));
app.use(cors());

/*--------------------------- POSTS QUERIES -------------------------------*/
app.post('/api/posts', async (req, res) => {
  const newPost = req.body;
  const db = await getDb();
  const post = await db.collection('posts').insertOne(newPost);
  res.send({message: "Post added"});
});

app.get('/api/posts', async (req, res) => {
  const db = await getDb();
  const posts = await db.collection('posts').find({}).toArray();
  res.send(posts);
});

app.get('/api/posts/:id', async (req, res) => {
  const db = await getDb();
  const post = await db.collection('posts').find({_id: ObjectId(req.params.id)}).toArray();
  res.send(post);
});

app.delete('/api/posts/:id', async (req, res) => {
  const db = await getDb();
  const result = await db.collection('posts').findOneAndDelete({_id: ObjectId(req.params.id)});
  if (!result.value) {
    res.send({ message: "Posts does not exist" });
  }
  res.send({ message: "Posts deleted" });
});

/*--------------------------- COMMENTS QUERIES -------------------------------*/
app.get('/api/comments', async (req, res) => {
  const db = await getDb();
  const posts = await db.collection('posts').find({}).toArray();
  const comments = posts.map(post => post.comments);
  res.send(comments);
});

/*--------------------------- USERS QUERIES -------------------------------*/
app.post('/signup', async (req, res) => {
  const newUser = req.body;
  const db = await getDb();
  const user = await db.collection('users').findOne({ email: newUser.email.toLowerCase() });
  if (user) {
    return res.sendHTTPError(400, 'Users already exist');
  }
  newUser.email = newUser.email.toLowerCase();
  newUser.password = bcrypt.hashSync(newUser.password, 10);
  await db.collection('users').insertOne(newUser);
  res.send({ message: "success" });
});

app.post('/auth', async (req, res) => {
  const { email, password } = req.body;
  const db = await getDb();
  const user = await db.collection('users').findOne({ email: email.toLowerCase() });
  if (!user) {
    res.sendHTTPError(401, 'User does not exist');
  }
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      delete user.password;
      const authToken = jwt.sign({ _id: user._id }, 'secret', { expiresIn: '20s' });
      res.send({ user, authToken });
    } else {
      res.sendHTTPError(401, 'Password is incorrect')
    }
  });
});

app.get('/api/users', requireAuth, async (req, res) => {
  const db = await getDb();
  const result = await db.collection('users').find({}).toArray();
  res.send(result);
});

app.get('/api/users/me', requireAuth, async (req, res) => {
  const db = await getDb();
  const user = await db.collection('users').findOne({ _id: ObjectId(req.userId) }, { fields: { password: false } });
  res.json(user)
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
