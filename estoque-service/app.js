const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Estoque Service OK');
});

app.listen(3003, () => {
    console.log('Estoque rodando');
});