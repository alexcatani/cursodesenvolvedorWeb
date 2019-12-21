// Armazenado uma função em uma variavel
const imprimirSoma = function (a,b) {
    console.log(a + b)
}

imprimirSoma(2, 3) 

// Armazenamendo uma função arrow em um avariaavel
const soma = (a, b) => {
    return a + b
}


console.log(soma(2,3))

// retorno implícito > forma mais simples e reduzida de quando a funçao tem apenas uma senteça de codigo
const subtracao = (a, b)  => a - b
console.log(subtracao(2, 3))

// No JS podemos criar funsoes e já armazenar elas em uma variavel
// Com o arrow function podemos crair funçoes reduzida assim simplificado o codigo

const imprimir2 = a => console.log(a) // Podemos reduzir ainda mais caso utilize apenas um argumento
imprimir2('Legal!!!')