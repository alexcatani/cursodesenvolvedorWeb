console.log('a =', a) // Em JS acontece um isamento da declaração da variavel por isso não ocorre erro.
var a = 2    // Não deve ser utilizado desta forma
console.log('a =', a)  // Apos a declaração o a variavel ja aprensenta o valor que foi atribuido a ela.

function teste() { // O mesmo efeito ocorre dentro de uma funcao
    console.log('a =', a) 
    var a = 2   
    console.log('a =', a) 
}

//console.log('b = ', b)   // o efeito de hoisting não funcio quando se utiliza o "let" para declarar
let b = 1
console.log('b = ', b)