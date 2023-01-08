const express = require('express');
const app = express();
app.use(express.json());
const usersControllers = require("../controllers/user-controllers.js")


app.post('/users', usersControllers.createUser)


module.exports = app;

