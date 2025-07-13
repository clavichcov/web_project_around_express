const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const readUsers = () => {
  const users = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8');
  return JSON.parse(users);
};

router.get('/', (req, res) => {
  const users = readUsers();
  res.send(users);
});

router.get('/:_id', (req, res) => {
  const { _id } = req.params;
  const users = readUsers();
  const user = users.find((user) => user._id === _id);
  if (!user) {
    return res.status(404).send({ message: 'ID de usuario no encontrado' });
  }
  res.send(user);
});

module.exports = router;