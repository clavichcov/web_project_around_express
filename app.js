const express = require('express');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');
const path = require('path');
const { PORT = 3000 } = process.env;
const app = express();


app.use('/cards', cardsRouter);
app.use('/users', usersRouter);

app.use((req, res) => {
  res.status(404).send({ message: 'Recurso solicitado, no encontrado' });
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
});

app.listen(PORT, () => {
  console.log('Enlace al servidor en el puerto:', PORT);

})
