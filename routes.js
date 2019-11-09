const express = require("express");
const routes = express.Router();



routes.post("/gabarito", (req, res) => {
    const resposta = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", ]
    const submit = req.body
    const resultado = resposta.every((item, index) => item === submit[`p${index}`])
    console.log(resultado)
    if (resultado) {
        res.sendFile(__dirname + './public');
    } else {
        res.sendFile(__dirname + '/perdeu.html');
    }
})

module.exports = routes