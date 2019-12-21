// Quando se utilizada um loop a váriavel mesmo depois de ser utilzida fica visivel no escopo global
for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i =',i)

for (let o = 0; o < 10; o++) {
    console.log(o)
}
// console.log('fim=', o) // Retorna erro pois a variavel não está declarada