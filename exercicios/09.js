/*
    9. Conversão Entre Formatos
    Escreva duas funções:
        - O paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente.
        - O objetoParaPares(obj) faz o inverso, retornando um array de pares.
*/

const pares = [
  ["nome", "Ana"],
  ["idade", 25],
];

const objeto = {
  nome: "Guilherme",
  idade: 23,
};

function paresParaObjeto(pares) {
  const objeto = {};
  for (par of pares) {
    objeto[par[0]] = par[1];
  }
  return objeto;
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}

const novoObjeto = paresParaObjeto(pares);
console.log(novoObjeto);

const novoArray = objetoParaPares(objeto);
console.log(novoArray);
