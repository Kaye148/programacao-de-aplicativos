function gerarResultados(){

    
    function med (numero_1, numero_2) {
        return (numero_1 + numero_2) / 2
    }
    
    function som (numero_1, numero_2) {
        return numero_1 + numero_2
    }
    
    function prod (numero_1, numero_2) {
        return numero_1 * numero_2
    }
    
    function mais (numero_1, numero_2) {
        return numero_1 > numero_2
    }
    
    function menos (numero_1, numero_2) {
        return numero_1 < numero_2
    }
    
    const numeroInput_1 = document.getElementById("numeroInput_1");
    let numero_1 = parseFloat (numeroInput_1.value);
    
    const numeroInput_2 = document.getElementById("numeroInput_2");
    let numero_2 = parseFloat (numeroInput_2.value);
    
    const resultadoDiv = document.getElementById("resultadoDiv")

    if (isNaN(numero_1) || isNaN (numero_2) || numero_1 === "" || numero_2 ==="") {
        document.getElementById("resultadoDiv").innerHTML = "<p>Digite um número válido</p>"
        return; 
    }
    
   let gerarResultado = `
        Soma: ${som(numero_1, numero_2)}<br>
        Média : ${med(numero_1, numero_2)}<br>
        Produto : ${prod(numero_1, numero_2)}<br>
        Maior?  ${mais(numero_1, numero_2)}<br>
        menor?  ${menos(numero_1, numero_2)}
    `;

    resultadoDiv.innerHTML = gerarResultado;
}

document.getElementById("btnExibir").addEventListener("click", gerarResultados);
