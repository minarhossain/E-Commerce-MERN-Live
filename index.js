const express = require('express');

const app = express();
const port = 5000;


// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send("Hello E-commerce")
})

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`)
})