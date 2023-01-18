const express = require('express');
const app = express();
app.use(express.json());
const usersControllers = require("../controllers/user-controllers.js")
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

// app.post('/users', (req, res) => {
//     res.set('Access-Control-Allow-Origin', '*');
//     res.send({ "msg": "This has CORS enabled 🎈" })
//     })

app.post('/users', usersControllers.createUser)
app.get('/users', usersControllers.confirmUserSignIn)
app.get('/email', usersControllers.confirmUserEmail)


module.exports = app;

