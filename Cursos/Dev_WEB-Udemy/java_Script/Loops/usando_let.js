const funcs = []       // Declarando array
for (let i = 0; i < 10; i++) { // Iniciado laco de repeticao
    funcs.push(function() {     // Funcao para adicionado um valor em cada posicao da array
        console.log(i)
    })
}

// Quando as variavel é declarado com "let" o loop é executado corretamente respeitando o escopo do bloco
funcs[2]()
funcs[8]()