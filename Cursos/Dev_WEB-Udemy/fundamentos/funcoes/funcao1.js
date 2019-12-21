// Funcao executa uma seguencia de codigo e pode receber dados de entrada e manipulalos
// 

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)     // O segundo parametro recebe undefined, neste caso irá retornar o valor NaN - Not a number
imprimirSoma(2, 10, 4, 6, 7, 8)     // Só irão ser utilizados os paramento que a funcao pede, os outros são ignorados
imprimirSoma() // O JS não retorna erro quendo não é passado valores para uma funcao

function soma(a, b = 0) {  // No versao do JS5 é posivel declara um valor defull para uma parametro de entrada
    return a + b
}

console.log(soma(1))  // Chama função e exibe dentro de uma mensagem do console.

