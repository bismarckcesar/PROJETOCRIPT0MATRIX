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
routes.get('/ganhou', (req, res) => {
    res.sendFile(__dirname + '/ganhou.html');
});

routes.get('/perdeu', (req, res) => {
    res.sendFile(__dirname + '/perdeu.html');
});
routes.post("/gabarito", (req, res) => {
    const resposta = [
        ["i", "n", "c", "o", "m", "o", "d", "o"],
        ["p", "e", "n", "s", "a", "d", "o", "r"],
        ["i", "n", "t", "e", "r", "i", "o", "r"],
        ["p", "o", "t", "a", "s", "s", "i", "o"],
        ["a", "s", "s", "e", "s", "s", "o", "r"],
        ["r", "o", "u", "s", "s", "e", "a", "u"],
        ["f", "a", "l", "e", "c", "i", "d", "o"],
        ["l", "u", "s", "t", "r", "a", "d", "a"]
    ]
    const resenha1 = "odisseia"
    const senha1 = req.body.Senha
    const submit = req.body
    const resultado = resposta.every((item, index) => item === submit[`p${index}`])
    console.log(resultado)
    console.log(submit)
    console.log(senha1)
    if (resultado || senha1 == resenha1) {
        return res.redirect("/fase2");
    } else {
        return res.redirect("/perdeu");
    }
})
routes.post("/gabarito2", (req, res) => {
    const resposta = [
        ["l", "u", "c", "r", "a", "r"],
        ["c", "r", "o", "a", "t", "a"],
        ["s", "e", "n", "h", "o", "r"],
        ["s", "i", "t", "u", "a", "r"],
        ["s", "e", "r", "e", "i", "a"],
        ["c", "a", "o", "l", "h", "a"],
        ["e", "c", "l", "u", "s", "a"],
        ["i", "m", "e", "r", "s", "o"]
    ]
    const resenha2 = "controle"
    const senha2 = req.body.Senha
    const submit = req.body
    const resultado = resposta.every((item, index) => item === submit[`p${index}`])
    console.log(resultado)
    console.log(submit)
    console.log(senha2)
    if (resultado || resenha2 == senha2) {
        return res.redirect("/fase3");
    } else {
        return res.redirect("/perdeu");
    }
})
routes.post("/gabarito3", (req, res) => {
    const resposta =
    [
        ["a", "r", "g", "o", "l", "a"], 
        ["l", "a", "n", "c", "h", "e"],
        ["a", "n", "s", "e", "i", "o"],
        ["n", "o", "v", "i", "ç", "o"],
        ["u", "t", "o", "p", "i", "a"],
        ["j", "u", "d", "i", "a", "r"],
        ["a", "r", "r", "e", "i", "o"],
        ["g", "i", "r", "a", "f", "a"],
        ["i", "n", "s", "a", "n", "o"],
        ["a", "g", "u", "l", "h", "a"]
    ]
    const resenha3 = "alan turing"
    const senha3 = req.body.Senha
    const submit = req.body
    const resultado = resposta.every((item, index) => item === submit[`p${index}`])
    console.log(resultado)
    console.log(submit)
    console.log(senha3)
    if (resultado || resenha3 == senha3) {
        return res.redirect("/ganhou");
    } else {
        return res.redirect("/perdeu");
    }
})

module.exports = routes
