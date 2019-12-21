// Tando dento ou fora do escompo a variavel é sobrescrevido quando se utiliza "var"
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)


// Quando as variaveis são declaradas utilizando "let" sempre será respeidoto escopo onde ela foi declarada
var letra = 'a'
{
    let letra = 'b'
    console.log('dentro =', letra)  //Retorna o valor de "b", caso não encontre ele procura em um escopo menor
}
console.log('fora =', letra)  //Retorna o valor de "a"