function soBoaNoticia(nota){
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

// soBoaNoticia(8.1)
// soBoaNoticia(6.1)

function seForVerdade(valor){
    if(valor){
        console.log('É verdade... ' + valor)
    }
}

// seForVerdade() //valor vazil retorna undefined
// seForVerdade(null) //resolve para falso
// seForVerdade(undefined) // resolve para falso
// seForVerdade(NaN) //resolve para falso
// seForVerdade('') //String vazia resolve para falso
// seForVerdade(0) //Único número que resolve para falso
// seForVerdade(-1) //Resolve para verdadeiro
// seForVerdade(' ') //String espaço resolve para verdadeiro
// seForVerdade('?') //String resolve para verdadeiro
// seForVerdade([]) //Array vazio resolve para verdadeiro
// seForVerdade([1,2]) //Array com elelmentos resolve para verdadeiro
// seForVerdade({}) //Objeto vazil resolve verdade

// O bloco de if é definido apenas pela linha onde ele está e 
// a primeira linha após ele quando não se utliza as chaves
function teste1(num){
    if(num >7)
        console.log(num)

    console.log('final') // esta linha não está dentro do bloco do if e sempre será executada.
}

// teste1(6)
// teste1(8)

// if/else
// Utilizando If com Else
const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') //Como JS é uma linguagem fracamente tipada valida o resultado como falso


