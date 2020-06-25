const express = require('express');
const User = require('../models/user');

const router = new express.Router();

router.post('/signup', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.send();
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;
