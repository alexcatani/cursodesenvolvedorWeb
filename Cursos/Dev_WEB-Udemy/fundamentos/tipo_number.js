const peso1 = 1.0 // Em js números declarados como decimais, mas que são inteiros são reconhecidos como tipo "number"
const peso2 = Number('2.0') // Da mesma forma que números declarados como string tambem são reconhecidos como "number"

console.log(peso1,peso2)
console.log(Number.isInteger(peso1)) // Cada tipo de identificador pode ter funções associadas e ele.

const avaliação1 = 9.871
const avaliação2 = 6.871

const total = avaliação1 * peso1 + avaliação2 * peso2
const media = total / (peso1 + peso2)
const media_arendoda = media.toFixed(2) // Deixa apenas 2 casas decimais, mas converte em tipo String

console.log(media_arendoda + Number(0.0091)) // "Number" é uma função e "number" é um tipo.
console.log(typeof media_arendoda) // Retorna tipo String
console.log(media)
console.log(media.toFixed(2)) // Retorna tipo String
console.log(typeof media) // Retorna tipo Number
console.log(media.toString()) // Retorna identificador como tipo String
console.log(media.toString(2)) // Retorna identificador como binario
