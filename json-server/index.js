const jsonServer = require('json-server');
const path = require('path');
const fs = require('node:fs');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 800);
  });
  next();
});

// eslint-disable-next-line consistent-return
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json('Authentication required');
  }
  next();
});

server.post((req, res, next) => {
  const { username, password } = req.body;
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, './db.json'), 'UTF-8'));
  const { users } = db;

  const userFromDb = users.find((user) => user.username === username && user.password === password);
  if (!userFromDb) {
    return res.status(403).json('Authentication required');
  }
  return res.json(userFromDb);
});

server.use(router);
server.listen(8000, () => {
  console.log('JSON Server is running on 8000 Port');
});
