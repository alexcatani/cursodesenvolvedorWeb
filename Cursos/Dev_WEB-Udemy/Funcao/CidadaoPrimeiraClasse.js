// Função em JS é First-Class Object (Citizens)
// Higher-order function ou Função de alta ordem

//Criando função de forma literarl
function fun1(){}

//Armazenar função em uma constante
const fun2 = function() {}

//Armazenar em um Arrey
const array = [function(a,b){return a + b },fun1, fun2]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// Passar função como parametro para outra função 
function run(fun){
    fun()
}

run(function () { console.log('Executando')})

// Uma função pode retornar/conter outra função
function soma(a,b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(1,2)(3)
const calculaFunção = soma(1,2)
calculaFunção(3)

