// Operadores lógicos

condicao_a = 1 < 2
condicao_b = 10 < 2

// no AND os dois precisão ser iguais para ser verdadeiro 
console.log(" - AND - ")
console.log(condicao_a && condicao_b)

// ! serve para inverter os valores TRU FALSE, negação de resultados
console.log("\n - NOT - ")
console.log(condicao_a && !condicao_b)

// or se a primeira opção for verdadeira as demais também serão 
console.log("\n - OR - ")
console.log(condicao_a || condicao_b)