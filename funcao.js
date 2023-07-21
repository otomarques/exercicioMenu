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
    


let valor =   prompt("Qual o valor da compra: ")
console.log("    ");
if (valor < 100 ) {
    console.log(" Sem desconto   ");
} else if (valor >= 101 && valor<= 200 ) {
    let total = (valor * 0.1) + valor
    console.log(" Desconto de 10%   ");
    console.log(total);
    
} else {
    
}{
    
}
    
}