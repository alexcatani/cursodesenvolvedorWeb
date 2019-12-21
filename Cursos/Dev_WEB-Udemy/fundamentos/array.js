const valores = [7.7,8.9,6.3,9.2] // Declarando arry de forma literal
console.log(valores[0], valores[3])
console.log(valores[4]) // No java scrip não gerra erro quando não encontra uma refência. E retorna undefined.

valores[10] = 10
console.log(valores)
console.log(valores.length) // Length: função que Mostar o total de elementos de uma array

// Arrays são eterogênios e asseitam multiplos tipos de valores na mesma matriz
valores.push({id:3}, false, null) // Adiciona 3 elementos na array utilizando o metodo push
console.log(valores)

console.log(valores.pop()) // Função pop: remove ultima item da array
console.log(valores)

delete valores[0]
console.log(valores) 

console.log(typeof valores) // Array no JS são do tipo object

