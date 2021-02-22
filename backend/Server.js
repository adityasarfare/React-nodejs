const express = require('express');
const cors = require("cors");
const data = require('./Data.js');

const app = express();
app.use(cors())

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.get('/', (req, res) => {
    res.send('Server is Ready');
});


const port = 5000
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});