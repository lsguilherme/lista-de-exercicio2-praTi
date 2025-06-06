/*
    6. Memoization
    Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.
*/

function fatorial(n) {
  if (n < 0) {
    throw new Error("Error: Apenas número positivo.");
  }
  if (n === 0) {
    return 1;
  }
  return n * fatorial(n - 1);
}

const memo = (fn) => {
  const cache = new Map();

  return (...args) => {
    const chave = JSON.stringify(args);
    const label = `Tempo para ${fn.name}(${chave})`;

    console.time(label);

    if (cache.has(chave)) {
      console.timeEnd(label);
      return cache.get(chave);
    }
    console.timeEnd(label);
    const resultado = fn(...args);
    cache.set(chave, resultado);
    return resultado;
  };
};

const memoFatorial = memo(fatorial);

console.log(memoFatorial(100));
console.log(memoFatorial(100));
