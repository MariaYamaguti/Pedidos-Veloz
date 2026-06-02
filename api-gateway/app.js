const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('API Gateway OK');
});

app.get('/health', (req, res) => {
    res.status(200).send('Healthy');
});

app.listen(8080, () => {
    console.log('Gateway rodando na porta 8080');
});