const express = require('express');
require('./db/mongoose');
const userRouter = require('./api/user');

const app = express();
app.use(express.json());
app.use(userRouter);

const port = 3000;

app.listen(port, () => {
  console.log('Server is up on port ', port);
});
