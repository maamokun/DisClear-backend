import { remove } from './utils/delete.js';
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: [ 'https://disclear.mikn.dev/', 'http://localhost:5500' ],
}));

app.post('/remove', (req, res) => {
    const token = req.query.token;
    const id = req.query.id;
    remove(token, id, res);
});

app.listen(3000, () => console.log('Server is running on port 3000'));