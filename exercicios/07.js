/*
    7. Mapeamento e Ordenação
    Dado um array produtos = [{ nome, preco }, ...], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.
*/

const produtos = [
  { nome: "Notebook", preco: 3500.0 },
  { nome: "Smartphone", preco: 2200.0 },
  { nome: "Fone de Ouvido", preco: 250.0 },
  { nome: "Monitor", preco: 1200.0 },
  { nome: "Teclado Mecânico", preco: 450.0 },
  { nome: "Mouse Gamer", preco: 300.0 },
  { nome: "Impressora", preco: 800.0 },
  { nome: "Webcam", preco: 350.0 },
  { nome: "HD Externo", preco: 500.0 },
  { nome: "Roteador Wi-Fi", preco: 280.0 },
];

let produtosOrdenadosPorMenorPreco = produtos
  .sort((a, b) => a.preco - b.preco)
  .map((p) => p.nome);

console.log(produtosOrdenadosPorMenorPreco);
