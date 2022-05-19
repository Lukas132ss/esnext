//  operador ... rest(juntar)/spread(espalhar)
// usar rest com parametro de função

// usar spread com objeto
const funcionarios = { nome: 'Maria', salario: 12345.67}
const clone = { ativo: true, ...funcionarios}
// console.log(clone)

//  usar spread com array
const grupoA = ['João', 'Lukas', 'Maria']
const grupoFinal = ['Roberto', 'Rafael', ...grupoA]
console.log(grupoFinal)