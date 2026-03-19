function mediar (n1, n2) {
    return (n1 + n2) / 2

}
function somar (n1, n2) {
    return n1 + n2

}
function produtor (n1, n2) {
    return n1 * n2

}
function maior  (n1, n2) {
    return n1 > n2

}
function menor (n1, n2) {
    return n1 < n2

}

function resultadoDiv () {
    const input1 = document.getElementById("numeroInput1");
    const input2 = document.getElementById("numeroInput2");
    const resultadoDiv = document.getElementById("resultadoDiv");
}

let n1 = parseFloat (input1.value);
let n2 = parseFloat (input2.value);

resultadoDiv.innerHTML = "";

if (isNaN(n1) || isNaN(n2)) {
    resultadoDiv.innerHTML = "<p>digite númeors validos</p>"
}

resultadoDiv.innerHTML +=`<p> Soma: ${somar(n1, n2)} </p>`
resultadoDiv.innerHTML +=`<p> Soma: ${mediar(n1, n2)} </p>`
resultadoDiv.innerHTML +=`<p> Soma: ${produtor(n1, n2)} </p>`
resultadoDiv.innerHTML +=`<p> Soma: ${maior(n1, n2) ? "Sim" : "Não" } </p>`
resultadoDiv.innerHTML +=`<p> Soma: ${menor(n1, n2) ? "Sim" : "Não"} </p>`

const botao = document.getElementById("btnExibir");
botao.addEventListener("click", resultadoDiv);
