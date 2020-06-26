function onOff(){
  document
    .querySelector("#modal")
    .classList
    .toggle("hide")

  
  document
    .querySelector("body")
    .classList
    .toggle("hideScroll")

  document
    .querySelector("#modal")
    .classList
    .toggle("addScroll")

}

function checkFields(event) {
  const valuesToCheck = [
    "title",
    "image",
    "category",
    "description",
    "url",
  ]

  const isEmpty = valuesToCheck.find(function(value){
    const checkIfIsString = typeof event.target[value].value === "string"
    const checkIfIsEmpty = !event.target[value].value.trim() //"trim()" verifica se há espaços no input

    if(checkIfIsString && checkIfIsEmpty){
      return true
      
    }
    
  })

  if (isEmpty){
    event.preventDefault() //EVITA QUE EXECUTE A AÇÃO, OU SEJA, LANCE OS DADOS
    alert("Por favor, preencha todos os campos!")
  }
}

