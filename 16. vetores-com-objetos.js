// Exemplo com vetor de nomes.
const listaDeNomes = ["Ana", "Maria", "Joana"]

// Exemplo com vetor de números
const listaDeNumeros = [1, 2, 3, 4, 5]

// Vetor de objetos com dados de nome e idade.
// Um objeto carrega dados com uma classe.

const listaDeUsuarios = [
    {nome:"Ana", idade: 25},
    {nome:"Maria", idade: 35},
    {nome:"Joana", idade: 45},
    {nome:"José", idade: 15},
    {nome:"João", idade: 15},
    {nome:"Jonas", idade: 14},
    {nome:"Jeremias", idade: 13},
    {nome:"Junior", idade: 12},
    {nome:"Jurandi", idade: 18}
]

// Percorrendo e exibindo os elementos do vetor. 
// ForEach é uma função com laço de repetição.
console.log("Exibindo todos os usúarios do vetor.")
listaDeUsuarios.forEach( usuario =>{
    console.log(`{$usuario.nome} tem ${usuario.idade} anos.`)
})

 for(let i = 0; i < listaDeUsuarios.length; i++) {
     console.log(`${listaDeUsuarios[i].nome} tem ${listaDeUsuarios[i].idade} anos.`)
}

console.log("\nFiltrando maiores de 18 anos.")
const maioridade = listaDeUsuarios.filter(usuario => usuario.idade >= 18)
// Use as {} caso precise de mais de uma linha.
// Neste caso nãoi precisa, por isso não vamos usar.
maioridade.forEach(usuario =>
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
)

console.log("\nFiltrando menores de 18 anos.")
const menoridade = listaDeUsuarios.filter(usuario => usuario.idade < 18)
menoridade.forEach( usuario =>
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
)

console.log("\nNa lista de números, filter e mostre apenas números pare.")
const Par = listaDeNumeros.filter(n => n % 2 == 0)
console.log(Par)

console.log("\nNa lista de nomes, mostre todos os nome com forEach.")
const Nomes = listaDeNomes
Nomes.forEach(listaDeNomes =>
    console.log(`${Nomes}`)
)




