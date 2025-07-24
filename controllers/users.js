const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then(users => res.send(users))
    .catch(err => res.status(500).send({ message: 'Error en el servidor', error: err }));
}

module.exports.getUserById = (req, res) => {
  const { userId } = req.params;
  User.findById(userId)
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: 'ID de usuario no encontrado' });
      }
      res.send(user);
    })
    .catch(err => {
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'ID de usuario no válido' });
      }
      res.status(500).send({ message: 'Error en el servidor', error: err });
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then(user => res.status(201).send({ data: user }))
    .catch(err => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: 'Datos de usuario no válidos', error: err });
      }
      res.status(500).send({ message: 'Error del servidor', error: err });
    });
};

module.exports.updateUser = (req, res) => {

};

module.exports.updateAvatar = (req, res) => {

};