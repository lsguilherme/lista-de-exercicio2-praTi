/*
    8. Agrupamento por Propriedade
    Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.
*/

const vendas = [
  { cliente: "Ana", total: 1500.0 },
  { cliente: "Bruno", total: 780.5 },
  { cliente: "Carlos", total: 320.0 },
  { cliente: "Ana", total: 500.0 },
  { cliente: "Daniela", total: 2050.75 },
  { cliente: "Bruno", total: 219.5 },
  { cliente: "Gabriel", total: 1199.99 },
  { cliente: "Carlos", total: 100.0 },
];

const totalDeVendaPorPessoa = vendas.reduce((acc, venda) => {
  const { cliente, total } = venda;

  if (!acc[cliente]) {
    acc[cliente] = 0;
  }

  acc[cliente] += total;

  return acc;
}, {});

console.log(totalDeVendaPorPessoa);
