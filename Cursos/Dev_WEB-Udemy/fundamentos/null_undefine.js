const a = {name: 'Teste'} 
// Quando é definido um valor a um objeto oque o elemento realmente guarda é 
// a posição da memória onde está armazenado aquele valor.
// console.log(a) 

const b = a // Atribuição por referencia
// Quando o valor de um obejto é atribuido a outro elemento o segundo objeto  
// apenas ganha a mesma referencia da memória do primeiro

// console.log(b)

b.name = 'Opa'
// Caso o valor de alguma das chaves de um objeto for alterado o mesmo é alterado no dois objetos.

//console.log(a)

let x = 3  // Aqui ocorre uma atribuição utilizado tipos primitivos 
let z = x  // Neste caso é copiado o valor de x para o z e não a refencia por não de tratar de um objeto.
z++
console.log(x)
console.log(z)
// Neste casso cada valor é alocado em uma posição diferente da memória e alterando 
// uma não altera o valor do outro

let valor // não inicializada
console.log(valor) // Valor Undefined pois não foi definido ainda
// console.log(valor2) retorna erro 'is not defined' que significa que não foi declarado.
valor = null  // Representa que elenento não foi referenciado a nenhum espaço na memória.

console.log(valor)
// console.log(valor.toString()) // Retorna erro para varia que foram denifidas como null

const produto = {}
console.log(produto.preco) //Retorna undefined pois não foi definido ainda

produto.preco = undefined // Evite atribuir undefined pois é um valor que a linguagem utiliza.
console.log(!!produto.preco)
delete produto.preco
console.log(produto)

