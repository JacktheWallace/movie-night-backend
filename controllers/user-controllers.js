const getDb = require("../services/db")

exports.createUser = async (req, res) => {
    const db = await getDb();
    const { email, name } = req.body;

    try {
        await db.query(`INSERT INTO users (userEmail, userName) VALUES (?, ?)`, [email, name]);
        const [user] = await db.query(`SELECT * FROM users WHERE userEmail = "${email}"`)
        
        res.status(201);
        res.send(user);
    } catch (err) {
        console.log(err);
        res.sendStatus(500).json(err);
    }
   db.close(); 
};
