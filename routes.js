const express = require('express');
const { getUsers, addUser, updateUser, deleteUser } = require('./controllers');

const router = express.Router();

router.get('/users', getUsers);
router.post('/users', addUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
