{
    {
        {
            var sera = "Será???"    // No JS quando utilizamos o 'var' para declarar uma variável a mesma
                                    // fica visível mesmo fora do bloco.
        }
    }
}
console.log(sera) // Variavel será impressa no console normalmente 

function teste() {
    var local = 123 // Quando uma variável é declarado dentro de uma funcao ela fica restrita aquele escopo.
    console.log(local)
}

teste()
// console.log(local) // Retorna erro de 'local is not defined' > variável não definida.

