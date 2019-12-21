const funcs = [] // Criado uma array 
for (var i = 0; i < 10; i++) {    // Criado laco de repeticao
    funcs.push(function() {     // Adicionado uma função para cada posição da array
        console.log(i)  
    })
}

// Será impresso o valor de 10 para as duas chamadas pois a variavel "i" está em um escopo geral.
funcs[2]() 
funcs[8]()
// Problema recorende de js de das verções mais antigas.
