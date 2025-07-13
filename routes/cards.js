const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const readCards = () => {
  const cards = fs.readFileSync(path.join(__dirname, '../data/cards.json'), 'utf-8');
  return JSON.parse(cards);
}

router.get('/', (req, res) => {
  const cards = readCards();
  res.send(cards);
});

router.get('/:_id', (req, res) => {
  const { _id } = req.params;
  const cards = readCards();
  const card = cards.find((card) => card._id === _id);
  if (!card) {
    return res.status(404).send({ message: 'ID de tarjeta no encontrado' });
  }
  res.send(card);
});
module.exports = router;