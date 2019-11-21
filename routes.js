const express = require("express");
const routes = express.Router();

routes.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

routes.get('/sobre', (req, res) => {
    res.sendFile(__dirname + '/public/sobre.html');
});

routes.get('/ajuda', (req, res) => {
    res.sendFile(__dirname + '/public/ajuda.html');
});
routes.get('/fase1', (req, res) => {
    res.sendFile(__dirname + '/public/fases/fase1.html');
});
routes.get('/fase2', (req, res) => {
    res.sendFile(__dirname + '/public/fases/fase2.html');
});
routes.get('/fase3', (req, res) => {
    res.sendFile(__dirname + '/public/fases/fase3.html');
});


routes.get('/perdeu', (req, res) => {
    res.sendFile(__dirname + '/perdeu.html');
});
routes.post("/gabarito", (req, res) => {
    const resposta = [
        ["i","n","c","ô","m","o","d","o"],
         ["p","e","n","s","a","d","o","r"], 
        ["i","n","t","e","r","i","o","r"] , 
        ["p","o","t","á","s","s","i","o"] , 
        ["a","s","s","e","s","s","o","r"] , 
        ["r","o","u","s","s","e","a","u"] , 
        ["f","a","l","e","c","i","d","o"] , 
        ["l","u","s","t","r","a","d","a"] 
        ]
    const resenha1 = "odisseia"
    const senha1 = req.body.Senha
    const submit = req.body
    const resultado = resposta.every((item, index) => item === submit[`p${index}`])
    console.log(resultado)
    console.log(submit)
    console.log(senha1)
    if (resultado || senha1 == resenha1) {
        res.sendFile(__dirname + '/public/fases/fase2.html');
    } else {
        res.sendFile(__dirname + '/perdeu.html');
    }
})
routes.post("/gabarito2", (req, res) => {
    const resposta = ["", "", "", "", "", "", "", "", "", "", ]
    const submit = req.body
    const resultado = resposta.every((item, index) => item === submit[`p${index}`])
    console.log(resultado)
    if (resultado) {
        res.sendFile(__dirname + '/public/fases/fase3.html');
    } else {
        res.sendFile(__dirname + '/perdeu.html');
    }
})
routes.post("/gabarito3", (req, res) => {
    const resposta = ["", "", "", "", "", "", "", "", "", "", ]
    const submit = req.body
    const resultado = resposta.every((item, index) => item === submit[`p${index}`])
    console.log(resultado)
    if (resultado) {
        res.sendFile(__dirname + '/public/fases/fase4.html');
    } else {
        res.sendFile(__dirname + '/perdeu.html');
    }
})

module.exports = routes
