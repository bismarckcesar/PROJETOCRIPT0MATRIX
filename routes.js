const express = require("express");
const routes = express.Router();



routes.post("/gabarito", (req, res) => {
  const resposta = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a",]
  const submit = req.body
  const resultado = resposta.every((item, index) => item === submit[`p${index}`])
  console.log(resultado)
  if(resultado) {
    res.send("ganhou")
  } else {
    res.send("senha errada")

  }
})

module.exports = routes
