// Usando "express" para criar e configurar o servidor
const express = require("express")
const { dirname } = require("path")
const server = express()

// variável que armazena as ideias
const ideas = [
  {
    imagem:"https://image.flaticon.com/icons/svg/2729/2729007.svg",
    title:"Cursos de Programação",
    category:"Estudo",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates nihil quae, modi iusto non, unde vitae inventore omnis blanditiis fuga in consectetur",
    url:"https://rocketseat.com.br"
  },
  {
    imagem:"https://image.flaticon.com/icons/svg/2729/2729005.svg",
    title:"Exercícios",
    category:"Saúde",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates nihil quae, modi iusto non, unde vitae inventore omnis blanditiis fuga in consectetur",
    url:"https://rocketseat.com.br"
  },
  {
    imagem:"https://image.flaticon.com/icons/svg/2729/2729027.svg",
    title:"Meditação",
    category:"Mentalidade",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates nihil quae, modi iusto non, unde vitae inventore omnis blanditiis fuga in consectetur",
    url:"https://rocketseat.com.br"
  },
  {
    imagem:"https://image.flaticon.com/icons/svg/2729/2729076.svg",
    title:"Maratonar Séries",
    category:"Lazer",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates nihil quae, modi iusto non, unde vitae inventore omnis blanditiis fuga in consectetur",
    url:"https://rocketseat.com.br"
  },
  {
    imagem:"https://image.flaticon.com/icons/svg/2729/2729021.svg",
    title:"Jogar Vídeo-game",
    category:"Lazer",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates nihil quae, modi iusto non, unde vitae inventore omnis blanditiis fuga in consectetur",
    url:"https://rocketseat.com.br"
  },
  {
    imagem:"https://image.flaticon.com/icons/svg/2729/2729038.svg",
    title:"Pintura",
    category:"Criatividade",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates nihil quae, modi iusto non, unde vitae inventore omnis blanditiis fuga in consectetur",
    url:"https://rocketseat.com.br"
  },

]



// configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

//configuração nunjucks ( responsável por permitir usar variáveis no html)

const nunjucks = require("nunjucks")
nunjucks.configure("views", {
  express: server,
  noCache: true,
})


// criando uma rota "/", captura o pedido do cliente para responder
server.get("/",function (req, res){
  
  const  reversedIdeas = [...ideas].reverse()

  let lastIdeas = []
  for (let idea of reversedIdeas){
    if (lastIdeas.length < 2){
      lastIdeas.push(idea)
    }
  }

  return res.render("index.html",{ideas: lastIdeas})
})

server.get("/ideias",function (req, res){

  const  reversedIdeas = [...ideas].reverse()

  return res.render("ideias.html", { ideas: reversedIdeas})
})

// ligando servidor na porta 3000
server.listen(3000)
