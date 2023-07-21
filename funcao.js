import promptSync from "prompt-sync";
let prompt = promptSync();


export function VerificaçãoDiaSemana() {

// Exercício 2: Verificação de dia da semana
// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
// semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
// 2 representa terça-feira e assim por diante.


let dia = prompt("Digite um numero correspondente ao dia da semana: ")
console.log("      ");

switch (dia) {
    case "1":
        console.log("Segunda");
        break;
    case "2":
        console.log("terça");
        break;
    case "3":
        console.log("quarta");
        break;
    case "4":
        console.log("quinta");

        break;
    case "5":
        console.log("sexta");
        break;
    case "6":
        console.log("sabado");
        break;
    case "7":
        console.log("domingo");
        break;
    default:
        console.log("Coloque um nuemro de 1 a 7!!!");
        break;


}
}


export function calculoDeDesconto() {
    


let valor =  parseInt( prompt("Qual o valor da compra: "))
console.log("    ");
if (valor < 100 ) {
    console.log(" Sem desconto   ");
} else if (valor >= 101 && valor<= 200 ) {
    let  total = valor * 1.1
    console.log(" Desconto de 10%   ");
    console.log(total);
    
} else {
    
}{
    
}
    
}



export function numerode1a10() {
    

// 1. Imprimir números de 1 a 10 utilizando o loop for
console.log("1. Imprimir números de 1 a 10 utilizando o loop for");

for (let contador = 1; contador <= 10; contador++) {
  console.log(contador); 
}


}


 export function ImprimirPares() {
    
    console.log("2. Imprimir números pares de 1 a 10.");
 
// 2. Imprimir números pares de 1 a 10.

for (let contador = 1; contador <= 10; contador++) {
   
    if ((contador % 2)==0 ) {
        console.log(contador);
    }
    
}
}

export function  fibonacci() {
    
console.log("5. Imprimir os primeiros 10 números da sequência de Fibonacci.");
// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.
// 0   1  1  2  3  5  8  13
// pn   sn   tn
// tn == pn + sn
// pn = sn
// sn = tn



let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (var i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
console.log(fibonacci);
}

export function ordemCrescente() {
    


console.log("Exercício 3: Verificação de números em ordem crescente Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.");


// Exercício 3: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.





let num1 = prompt("Digite o primeiro numero: ")
console.log("   ");
let num2 = prompt("Digite o segundo numero: ")
console.log("   ");
let num3 = prompt("Digite o terceiro numero: ")
console.log("   ");

if (num1 < num2 && num2 < num3 ) {
    console.log("os numeros entao em ordem "+ num1, num2,num3 ); 
}else {
    console.log(" numeros fora de ordem"); 
}
}