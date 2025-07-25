
const router = require('express').Router();
const { getUserById, getUsers, createUser, updateUser, updateAvatar } = require('../controllers/users');
const { route } = require('./cards');

router.get('/', getUsers );
router.get('/:userId', getUserById);
router.post('/', createUser);
router.patch('/me', updateUser);
router.patch('/me/avatar', updateAvatar);

module.exports = router;