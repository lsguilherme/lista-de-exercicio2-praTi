/*
    4. Fatorial Recursivo
    Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1.
*/
const prompt = require("prompt-sync")();

function fatorial(n) {
  if (n < 0) {
    throw new Error("Error: Apenas número positivo.");
  }
  if (n === 0) {
    return 1;
  }
  return n * fatorial(n - 1);
}

let numero = prompt("Escolha um número para calcular o fatorial: ");
console.log(`O número fatoral de ${numero} é: ${fatorial(numero)}`);
