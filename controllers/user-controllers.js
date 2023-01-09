const getDb = require("../services/db")

exports.createUser = async (req, res) => {
    const db = await getDb();
    const { email, username, password } = req.body;

    try {
        await db.query(`INSERT INTO users (userEmail, userName, userPassword) VALUES (?, ?, ?)`, [email, username, password]);
        const [user] = await db.query(`SELECT * FROM users WHERE userEmail = "${email}"`)
        
        res.status(201);
        res.send(user);
    } catch (err) {
        console.log(err);
        res.sendStatus(500).json(err);
    }
   db.close(); 
};

exports.confirmUserSignIn = async (req, res) => {
    const db = await getDb();
    const {email, password} = req.body;

    try {
        const [userID] = await db.query(`SELECT userID FROM users WHERE userEmail = "${email}"  AND userPassword = "${password}"`)
        res.status(200);
        console.log(userID)
    } catch (err) {
    console.log(err);
    res.sendStatus(404).json(err);
}
db.close();
};
