// Vetores.

const listaDeNomes = ["Marta", "José", "Maria"]

console.log ("Exibindo todos os elementos:")
console.log(listaDeNomes)

console.log("\nExibindo apenas o primeiro elemento:")
console.log(listaDeNomes[0])

console.log("\nAdicionando um elemento: ")
listaDeNomes.push("Marília")
console.log(listaDeNomes)


// Sua vez, adicione mais um elemento na lista.

console.log("\nAdicionando um elemento: ")
listaDeNomes.push("Fogo")
console.log(listaDeNomes)

console.log("\nRemovando um elemento: ")
// A partir do índice 2,remover 1 apenas elemto.
listaDeNomes.splice(2,1)
console.log(listaDeNomes)

// remova apenas o segundo elemento da lista.
// o primeiro numero indica onde o elemento esta posicionado na lista e a partir desse, o segundo numero ele indica quantos nomes serão apagados  
listaDeNomes.splice(1,1)
console.log(listaDeNomes)


console.log("\nRemovando apenas o último elemento: ")
listaDeNomes.pop()
console.log(listaDeNomes)

console.log("\nRemovando apenas o primeiro elemento: ")
listaDeNomes.shift()
console.log(listaDeNomes)

