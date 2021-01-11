// Java Script possui uma tipagem dinámica.

let qualquer = "legal"
console.log(qualquer)
console.log(typeof qualquer) // Retorna o tipo "String"

// Por ser dínamica permite que a mesma variável possa receber valores de tipos diferrentes.
qualquer = 3.1516
console.log(qualquer)
console.log(typeof qualquer) // Retorna o tipo "number".

// Evite utilizar nomes genéricos e siglas para identificador
let valor = ""
let numero = 1
let pqp = false // Evite identificadores que precisen de comentários para entendimento. Exp: "pqp" -> Produto Químico Preigoso... kkk 