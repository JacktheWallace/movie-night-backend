const app = require('./src/app.js');
const PORT = process.env.PORT || 4000;
// const cors = require('cors');
// app.use(cors({
//     origin: '*'
// }));

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
});