const listaDeAlunos = [
    { nome: "Ana", nota: 5.0},
    { nome: "Bruno", nota: 10.0},
    { nome: "Carla", nota: 2.0},
    { nome: "Andrea", nota: 7.0},
    { nome: "Marta", nota: 6.0}
]

console.log("Encontre a aluna Marta e mostre o nome e a média dela.")
const usuarioEncontrado = listaDeAlunos.find(a => a.nome === "Marta")
console.log(usuarioEncontrado)
console.log(`Nome: ${usuarioEncontrado.nome} \nNota: ${usuarioEncontrado.nota}`)

console.log("Mostre a média geral da turma.")
const mediaGeral = listaDeAlunos.reduce(total = listaDeAlunos)
console.log("Mostre o nome e a nona dos alunos com nota abaixo de 7.0.")

console.log("Mostre apenas o nome dos alunos com nota maior ou igual a 7.0.")


