// Declarações e variaveis
// var, let e const
var nome="Fiap";
console.log(nome)

var nome="Teste";
console.log(nome)

const taxaJuros=0.05
console.log(taxaJuros)

//typeof verifica o tipo da variavel

let exemplo1="ola-dev-let"
console.log(typeof exemplo1)

var exemplo2="ola-dev-var"
console.log(exemplo2)

const exemplo3="ola-dev-const"
console.log(exemplo3)

let exemplo4=true
console.log(exemplo4)

let exemplo5={nome:"teste"};
console.log(exemplo5)

let exemplo6=["Java","C#","PHP"];
console.log(exemplo6)

// valor undefined
let exemplo7
console.log(exemplo7)

//valor vazio
let exemplo8 = null
console.log(exemplo8)


// OPERADORES ARITMÉTICOS

const valor1=10

const valor2=20

console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 * valor2);
console.log(valor1 / valor2);

// OPERADORES LÓGICOS
// = atribuição
// == comparação
// === valor e tipo (estritamente igual)
// && = E (todas as condiç~eos tem que ser verdadeiras)
// || = OU (uma das condições tem que ser veradeira)

console.log(valor1 < valor2);
console.log(valor1 > valor2);
console.log(valor1 == valor2);
console.log(valor1 === valor2);

console.log(valor1 > 10 && valor2 < 10);
console.log(valor1 > 10 || valor2 < 10);

//=====================================================================

// EXEMPLO 01
let p=20
let v=10
let precoFinal=(p-v)
console.log("O preço final com desconto é:",precoFinal);

//=====================================================================

//EXEMPLO 02
let a = 20
let b = 10
let comparar=(a === 20 && b >= 10 )
console.log(comparar)

// ====================================================================

//EXEMPLO 03
const usuario_logado=20;
const tempo_token=10;
const transacao =(usuario_logado === 20 && tempo_token === 10)
console.log(transacao)
