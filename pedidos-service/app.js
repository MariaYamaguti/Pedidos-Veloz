const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Pedidos Service OK');
});

app.listen(3001, () => {
    console.log('Pedidos rodando');
});