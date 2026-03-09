// Novos recursos ES6.

// Vetor de números.
const listaDeNumeros = [1, 2, 3, 4, 5]

console.log("Exibindo números do vetor:")
console.log(listaDeNumeros)

console.log("\nMultiplicando números do vetor:")
console.log(listaDeNumeros)

console.log("\nMultiplicando números do vetor:")
const dobrados = listaDeNumeros.map(n => n * 2)
console.log(dobrados)
// o map sever para fazer operacão matematica em todos os valores endividualmente 

console.log("\nfiltrar números pares do vetor:")
const pares = listaDeNumeros.filter(n => n % 2 == 0)
console.log (pares)

// reduce serve para reaproveitar todos os valores da lista,serve para somar todos os valores presente em um vetor ,reduce percorre um vetor completo
// atual é o que estar dentro do vetor 
console.log("\nSomando todos os números do vetor: ")
const soma = listaDeNumeros.reduce((soma, atual) => soma + atual, 0)
console.log(soma)


