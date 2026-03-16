function somar(numero, numero) {
    return numero + numero
}

function (numero, numero) {
    return numero * numero
}

function dividir(numero, numero) {
    return numero / numero
}

const soma = (numero, numero)

function exibirResultado() {
    const numeroInput = document.getElementById("numeroInput");
    let numero = parseFloat(numeroInput.value);

    const resultadoDiv = document.getElementById("exibirResultado");
    resultadoDiv.innerHTML = "";

    if (isNaN(numero) || numero ===null || numero === "") {
        resultadoDiv.innerHTML = "<p> Por favor digite um número.</p>"
        return;
    }

    resultadoDiv.innerHTML += `<h2> Média </h2>`
    resultadoDiv.innerHTML += `<h2> Soma </h2>`
    resultadoDiv.innerHTML += `<h2> produto </h2>`
    resultadoDiv.innerHTML += `<h2> Maior </h2>`
    resultadoDiv.innerHTML += `<h2> Menor </h2>`

    let resultado = numero / numero
    let resultado2 = numero + numero
    let resultado3 = numero < numero
    let resultado4 = numero > numero
    let resultado5 = numero * numero

    resultadoDiv.innerHTML +=`<p> ${numero} + ${numero} = ${resultado} </p>`
    resultadoDiv.innerHTML +=`<p> ${numero} + ${numero} = ${resultado2} </p>`
    resultadoDiv.innerHTML +=`<p> ${numero} + ${numero} = ${resultado3} </p>`
    resultadoDiv.innerHTML +=`<p> ${numero} + ${numero} = ${resultado4} </p>`
    resultadoDiv.innerHTML +=`<p> ${numero} + ${numero} = ${resultado5} </p>`
}

const botaoExibir = document.getElementById("btnExibir");
botaoExibir.addEventListener("click", exibirResultado);



