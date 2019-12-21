const prod1 = {} //Objeto no JS é um coleção chave/valor 
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Lega'] = 0.40 // Evitar atributos com espaços

console.log(prod1)

// notação literal do objeto
const prod2 = {
    nome: 'Casima Polo',
    preco: 79.90,
    obj:{
        blabla:1,
        obj: {
            blabla:2
        }
    }
}

console.log(prod2)
console.log(prod2.obj.obj.blabla)

'{"nome": "Casima Polo","preco": 79.90}' // isso é um JSON

// JSON é um elento textual e o Objeto do JS é uma coleção chave/valor

console.log(typeof Object)
console.log(typeof new Object)  // Pode estanciar uma secao

const cliente = function() {} // Function sao criadas como funcoes
console.log(typeof cliente)
console.log(typeof new cliente)

class Produto {} // ES 2015 (ES6) - Classe sao criadas como funcoes
console.log(typeof Produto)
console.log(typeof new Produto)
