// // Declarações e variaveis
// // var, let e const
// var nome="Fiap";
// console.log(nome)

// var nome="Teste";
// console.log(nome)

// const taxaJuros=0.05
// console.log(taxaJuros)

// //typeof verifica o tipo da variavel

// let exemplo1="ola-dev-let"
// console.log(typeof exemplo1)

// var exemplo2="ola-dev-var"
// console.log(exemplo2)

// const exemplo3="ola-dev-const"
// console.log(exemplo3)

// let exemplo4=true
// console.log(exemplo4)

// let exemplo5={nome:"teste"};
// console.log(exemplo5)

// let exemplo6=["Java","C#","PHP"];
// console.log(exemplo6)

// // valor undefined
// let exemplo7
// console.log(exemplo7)

// //valor vazio
// let exemplo8 = null
// console.log(exemplo8)


// // OPERADORES ARITMÉTICOS

// const valor1=10

// const valor2=20

// console.log(valor1 + valor2);
// console.log(valor1 - valor2);
// console.log(valor1 * valor2);
// console.log(valor1 / valor2);

// // OPERADORES LÓGICOS
// // = atribuição
// // == comparação
// // === valor e tipo (estritamente igual)
// // && = E (todas as condiç~eos tem que ser verdadeiras)
// // || = OU (uma das condições tem que ser veradeira)

// console.log(valor1 < valor2);
// console.log(valor1 > valor2);
// console.log(valor1 == valor2);
// console.log(valor1 === valor2);

// console.log(valor1 > 10 && valor2 < 10);
// console.log(valor1 > 10 || valor2 < 10);

// //=====================================================================

// // EXEMPLO 01
// let p=20
// let v=10
// let precoFinal=(p-v)
// console.log("O preço final com desconto é:",precoFinal);

// //=====================================================================

// //EXEMPLO 02
// let a = 20
// let b = 10
// let comparar=(a === 20 && b >= 10 )
// console.log(comparar)

// // ====================================================================

// //EXEMPLO 03
// const usuario_logado=20;
// const tempo_token=10;
// const transacao =(usuario_logado === 20 && tempo_token === 10)
// console.log("Usuario:", transacao);


// IF and ELSE and ELIF

if(true){
        console.log("Verdadeiro")

}
let nome = "fiap"

if(nome == "fiap") {
    console.log("Nome Correto")
}

if(nome == "fiap") {
    console.log("Usuario Correto")
}else{
    console.log("Usuario Errado")
}

// if encadeado / animado

let idade = 15;

if(idade <= 13){
    console.log("É uma criança")
}else if(idade >13 && idade <18){
    console.log("É um adolescente")
}else if(idade > 18 && idade < 65){
    console.log("É um adulto")
}else{
    console.log("É um idoso")
}

//switch case

let pratos="lasanha"

switch(pratos){
    case "macarrão":
        console.log("A melhor massa")
        break;
    case "salada":
        console.log("A salada saudavel")
        break;
    case "lasanha":
        console.log("O meljor prato")
        break;
    default:
        console.log("Nenhuma das opções")
}

// ternario
/*

? = if
: = else

*/
 let valor = 100
 let resultado = valor ==100 ? "Valor certo": "Valor errado";
 console.log(resultado)

let usuario="dev";
let logado= usuario == "dev" ? "Usuario Logado": "Usuario invalido";
console.log(logado)


// Estrutura de repetição

for(let i=1; i<=5; i++){
    console.log("valor",i)
}

const linguagens = ["Java", "Python","C#","PHP"];

for(let i = 0; i < linguagens.length; i++){
    console.log("Linguagem", i ,":", linguagens[i])
} 

//dar apelido para o nome / simplificar
const tecnologias = ["JS","HTML","CSS"];

for(let tec of tecnologias){
    console.log("Estudando",tec)
}

// for com objeto
const carros = {marca:"Volks", modelo: "Jetta", ano:2025};

for(let dados in carros){
    console.log(dados,":", carros[dados])
}

//while  - usamos quando não sabemos a quantidade de vezes
let numero = 1;

while(numero <=10){
    console.log("contagem",numero)
    numero++;
}

// declarando variavel indefinida
let num;
//enquanto o numero não for 0 ele continua rodando e registrando
while(num !== "0"){
    num = prompt("Digite um numero ou 0 para sair.")
    console.log("Você digitou", num)
}
