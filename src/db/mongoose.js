const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://anjali:WWIuqPQxKEsNU8CC@cluster0-gjibh.mongodb.net/edtech?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
