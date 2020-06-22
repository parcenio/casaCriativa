// Usando "express" para criar e configurar o servidor
const express = require("express")
const { dirname } = require("path")
const server = express()

// configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

//configuração nunjucks ( responsável por permitir usar variáveis no html)

const nunjucks = require("nunjucks")
nunjucks.configure("views", {
  express: server,
})

// criando uma rota "/", captura o pedido do cliente para responder
server.get("/",function (req, res){
  return res.render("index.html")
})

server.get("/ideias",function (req, res){
  return res.render("ideias.html")
})

// ligando servidor na porta 3000
server.listen(3000)
