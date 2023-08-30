const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

app.use(cors())
app.use(express.json())
const port = 3000;

app.get('/api/test', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/addExpense', (req, res) => {
    res.json(req.body);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})