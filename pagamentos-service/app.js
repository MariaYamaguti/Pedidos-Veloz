const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Pagamentos Service OK');
});

app.listen(3002, () => {
    console.log('Pagamentos rodando');
});