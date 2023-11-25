const app = require('./app');
const connectionDB = require('./src/config/connectionDB');
const port = 5000;



app.listen(port, async () => {
    console.log(`Server is running http://localhost:${port}`)
    await connectionDB();
})