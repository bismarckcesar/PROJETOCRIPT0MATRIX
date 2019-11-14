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
routes.get('/fase4', (req, res) => {
    res.sendFile(__dirname + '/public/fases/fase4.html');
});
routes.get('/fase5', (req, res) => {
    res.sendFile(__dirname + '/public/fases/faseboss.html');
});

routes.post("/gabarito", (req, res) => {
    const resposta = ["incômodo", "pensador", "interior", "potássio", "assessor", "rousseau", "falecido", "lustrada"]
    const resenha1 = "odisseia"
    const senha1 = req.body.Senha
    const submit = req.body
    const resultado = resposta.every((item, index) => item === submit[`p${index}`])
    console.log(resultado)
    console.log(submit)
    console.log(senha1)
    if (resultado && senha1 == resenha1) {
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
        res.sendFile(__dirname + '/public\fases\fase3.html');
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
        res.sendFile(__dirname + '/public\fases\fase4.html');
    } else {
        res.sendFile(__dirname + '/perdeu.html');
    }
})
routes.post("/gabarito4", (req, res) => {
    const resposta = ["", "", "", "", "", "", "", "", "", "", ]
    const submit = req.body
    const resultado = resposta.every((item, index) => item === submit[`p${index}`])
    console.log(resultado)
    if (resultado) {
        res.sendFile(__dirname + '/public\fases\bossfase.html');
    } else {
        res.sendFile(__dirname + '/perdeu.html');
    }
})
routes.post("/gabarito5", (req, res) => {
    const resposta = ["", "", "", "", "", "", "", "", "", "", ]
    const submit = req.body
    const resultado = resposta.every((item, index) => item === submit[`p${index}`])
    console.log(resultado)
    if (resultado) {
        res.sendFile(__dirname + '/ganhou.html');
    } else {
        res.sendFile(__dirname + '/perdeu.html');
    }
})

module.exports = routes
