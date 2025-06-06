/*
    3. Palavras Únicas
    Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.

    Lógica:
        - Separar cada palavra - split(" ")
        - Percorrer o array com a palavra atual para verificar se já existe ela
            - Se não exister: adicionar na lista - push()
            
    
    Retorno:
        - Array com as palavras não repetidas
*/
const prompt = require("prompt-sync")();

function removeDuplicata(texto) {
  let palavras = texto.toLowerCase().split(" ");
  let palavrasUnicas = [];

  for (let i = 0; i < palavras.length; i++) {
    let palavraAtual = palavras[i];
    if (!palavrasUnicas.includes(palavraAtual)) {
      palavrasUnicas.push(palavraAtual);
    }
  }

  return palavrasUnicas;
}

let texto = prompt("Digite um texto para remover as duplicatas: ");
console.log(removeDuplicata(texto));
