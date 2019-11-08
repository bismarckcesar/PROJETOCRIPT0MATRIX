const express = require('express');
const routes = express.Router();
const jogo = require('./jogo');


routes.use(express.static(__dirname));

routes.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
routes.get('/jogo', (req, res) => {
    res.render('server', { dica: jogo.dica, symbol: jogo.symbol, senha: jogo.senha });
});
routes.get('/ganhou', (req, res) => {
    res.sendFile(__dirname + '/ganhou.html');
});

routes.post('/gabarito', (req, res) => {
    const { resposta } = req.body;
    if (resposta == jogo.senha) {
        res.sendFile(__dirname + '/ganhou.html');
    } else {
        res.sendFile(__dirname + '/perdeu.html');
    }
});