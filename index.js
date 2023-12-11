import { remove } from './utils/delete';
const express = require('express');

const app = express();

app.post('/remove', (req, res) => {
    const token = req.query.token;
    const id = req.query.id;
    remove(token, id, res);
});

app.listen(3000, () => console.log('Server is running on port 3000'));