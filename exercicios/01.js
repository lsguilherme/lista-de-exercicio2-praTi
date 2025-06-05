/*
    1. Validação de Datas
    Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.

    Estrutura:
    Função ehdataValida(dia, mes, ano): 
        Lógica:
            - Verificar se é bissexto
            - Se dia for maior que 31 ou menor que 1 = Inválida
            - Se mês for maior que 12 ou menor que 1 = Inválida
        Retorno: 
            - true se for uma data real
            - false se não for
            
*/

const prompt = require("prompt-sync")();

function verificaBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}

function ehDataValida(dia, mes, ano) {
  const diasPorMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (verificaBissexto(ano)) {
    diasPorMes[2] = 29;
  }
  if (mes < 1 || mes > 12) return false;
  if (dia < 1 || dia > diasPorMes[mes]) return false;

  return true;
}

let dia = parseInt(prompt("Digite um dia: "));
let mes = parseInt(prompt("Digite um mês: "));
let ano = parseInt(prompt("Digite um ano: "));

console.log(ehDataValida(dia, mes, ano));
