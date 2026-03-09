// Exercício.

// Crie um vetor com nome de seus familiares 
// Com seis nomes.

// Use todos os comando vistos em vetores após criar a lista.

const listaDeFamilia = ["Kayky", "Sulamita", "Samira", "Jordana", "Iris", "Alessandra"]

console.log("Exibir Nomes:")
console.log(listaDeFamilia)

console.log("\nExibir apenas o primero nome:")
console.log(listaDeFamilia[0])

console.log("\nAdicionar um nome: ")
listaDeFamilia.push("Davi")
console.log(listaDeFamilia)

console.log("\nRemovendo o primeiro nome: ")
listaDeFamilia.shift()
console.log(listaDeFamilia)

console.log("\nRemovendo apenas o último nome: ")
listaDeFamilia.pop()
console.log(listaDeFamilia)

listaDeFamilia.splice(4,4)
console.log(listaDeFamilia)

listaDeFamilia.splice(0,3)
console.log(listaDeFamilia)