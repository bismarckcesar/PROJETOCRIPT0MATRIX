const express = require("express");
const routes = express.Router();



routes.post("/gabarito", (req, res) => {
    const resposta = ["incômodo", "pensador", "interior", "potássio", "assessor", "rousseau", "falecido", "lustrada", "embebido", "calmante", "odisseia"]
    const submit = req.body
    const resultado = resposta.every((item, index) => item === submit[`p${index}`])
    console.log(resultado)
    if (resultado) {
        res.sendFile(__dirname + '/public\fases\fase2.html');
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
        res.sendFile(__dirname + 'ganhou.html');
    } else {
        res.sendFile(__dirname + '/perdeu.html');
    }
})

module.exports = routes