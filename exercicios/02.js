/*
    2. Jogo de Adivinhação
    Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.


    Lógica:
    - Gerar um número aleatório de 1 a 100;
    - Avaliar se o usuario acertou;
    - Repetir o prompt até o usuário acertar.

    Retorno:
        - Se for maior que o aleatório: informa que é maior e retorna o prompt
        - Se for menor que o aleatório: informa que é menor e retorna o prompt
        - Se acertar da Parabéns, informa que acertou e da um break no while.
*/
const prompt = require("prompt-sync")();

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

function validaNumero(numeroEscolhido, numAleatorio) {
  if (numeroEscolhido < numAleatorio) {
    return {
      acertou: false,
      mensagem: "Número aleatório é MAIOR. Tente novamente!",
    };
  } else if (numeroEscolhido > numAleatorio) {
    return {
      acertou: false,
      mensagem: "Número aleatório é MENOR. Tente novamente!",
    };
  } else {
    return {
      acertou: true,
      mensagem: "Parabéns!! Você acertou.",
    };
  }
}

let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

while (true) {
  let num = parseInt(prompt("Digite um número: "));
  if (isNaN(num) || num < 1 || num > 100) {
    console.log("Por favor, digite um número válido entre 1 e 100.");
    continue;
  }

  let resultado = validaNumero(num, numeroAleatorio);

  console.log("-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-");
  console.log(resultado.mensagem);
  console.log("Você tentou : " + tentativas + " vezes.");
  console.log("-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-");

  if (resultado.acertou) {
    break;
  }
  tentativas++;
}
