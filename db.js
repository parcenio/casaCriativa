const sqlite3 = require ("sqlite3").verbose()
const db = new sqlite3.Database('./ws.db')

// serialize permite utilizar uma função para executar comandos sql que o desenvolvedor desejar
db.serialize(function() {

  //CRIAR TABELA
  db.run(`
  
    CREATE TABLE IF NOT EXISTS ideas(

      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      title TEXT,
      category TEXT,
      description TEXT,
      url TEXT

    );
  `)

  //INSERIR DADOS
 /* const query = `
  INSERT INTO ideas(
    image,
    title,
    category,
    description,
    url
  ) VALUES(?,?,?,?,?);
  `
  const values = [
    "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    "Cursos de Programação",
    "Estudo",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates nihil",
    "https://rocketseat.com.br"
  ]
  db.run(query,values,function(err){
    if (err) return console.log(err)

    console.log(this)

  })*/

  //CONSULTAR DADOS
  /*db.all(`SELECT * FROM ideas`,function(err,rows){
    if (err) return console.log(err)

    console.log(rows)
  })*/

  //DELETAR UM DADO DA TABELA
  /*db.run(`DELETE FROM ideas WHERE id = ?`,[1], function(err){
    if (err) return console.log(err)

    console.log("DELETEI!",this)
  })*/


})

module.exports = db