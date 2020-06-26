// Usando "express" para criar e configurar o servidor
const express = require("express")
const { dirname } = require("path")
const server = express()
const db = require("./db")


// configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

//habilitando o red.body
server.use(express.urlencoded({extended: true}))

//configuração nunjucks ( responsável por permitir usar variáveis no html)

const nunjucks = require("nunjucks")
nunjucks.configure("views", {
  express: server,
  noCache: true,
})


// criando uma rota "/", captura o pedido do cliente para responder
server.get("/",function (req, res){
  
  db.all(`SELECT * FROM ideas`,function(err,rows){
    if (err) {
      console.log(err)
      return res.send("ERRO NO BANCO DE DADOS")
    }

      const  reversedIdeas = [...rows].reverse()

        let lastIdeas = []
        for (let idea of reversedIdeas){
          if (lastIdeas.length < 2){
            lastIdeas.push(idea)
          }
      }

      return res.render("index.html",{ideas: lastIdeas})
  })

  
})

server.get("/ideias",function (req, res){

  db.all(`SELECT * FROM ideas`,function(err,rows){
    if (err) {
      console.log(err)
      return res.send("ERRO NO BANCO DE DADOS")
    }

      const  reversedIdeas = [...rows].reverse()

      return res.render("ideias.html", { ideas: reversedIdeas})

  })

})

// ler os dados inseridos e publica com o método POST
server.post("/", function(req,res){
  //INSERIR DADOS
    const query = `
    INSERT INTO ideas(
      image,
      title,
      category,
      description,
      url
    ) VALUES(?,?,?,?,?);
    `
    const values = [
      req.body.image,
      req.body.title,
      req.body.category,
      req.body.description,
      req.body.url

    ]
    db.run(query,values,function(err){
      if (err) {
        console.log(err)
        return res.send("ERRO NO BANCO DE DADOS")
      }

      return res.redirect("/ideias")

    })
})
// ligando servidor na porta 3000
server.listen(3000)
