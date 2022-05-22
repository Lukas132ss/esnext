// let a = 1
// console.log(a)

const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

 new Promise(function(resolve) {
    resolve(['João', 'Lukas', 'Roberto', 'Luis'])
}) 
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)