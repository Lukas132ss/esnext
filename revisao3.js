//  ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notaçao literal
const nome = 'Lukas'
const pessoa = {
    nome,
    ola() {
        return 'Olá pessoal!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}

class Cachorro extends Animal {
    falar() {
        return 'AU AU AU'
    }
}

console.log(new Cachorro().falar())