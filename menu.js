import PromptSync from "prompt-sync";
// import { verificarMaiorIdade } from "./exercicios.js";
import { VerificaçãoDiaSemana, calculoDeDesconto } from "./funcao.js";



//import  p from "prompt-sync";
const prompt = PromptSync()
// menu para escolher qual exercicio ousuario escolher

let exercicio;
let continuar;

do {
    exercicio = parseInt(prompt("digite um numero que represente um exercicio de 1 a 8: "));

    switch (exercicio) {
        case 1:
            // chamando funçao hello word()
            VerificaçãoDiaSemana();

            break;
        case 2:
            //objeto
            let aluno = {
                nome: "Rebeca",
                idade: 19,
                hardSkills: ["figma", "HTML", "css,", "web REsponsivo"]
            }

            console.log(aluno.nome, aluno.idade, aluno.hardSkills);
            console.log(aluno.nome, aluno.idade, aluno.hardSkills[1]);
            console.log("Objeto aluno", aluno);
            console.log("ola", aluno.nome);
            break;
        case 3:
        calculoDeDesconto();
            break;

        default:
            console.log("digite um numero de 1 a 8");
            break;
    }
    continuar = prompt("Deseja continuar ver outros exercicios?, Digite s para sim e n para não: ").toLocaleLowerCase(); /// .toLocaleLowerCase() transforma o texto em minusculo

} while (continuar === "s");

function helloword(frase) {
    console.log(frase);
}

console.log("Xau!!!");