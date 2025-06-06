/*
    5. Debounce
    Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo.

    Lógica:
        - criar function debounce(fn, delay)
            Recebe:
                - fn - função
                - delay - tempo em ms
            Retorna:
                - só executa a função (fn) dentro do intervalo (delay)

*/

function debounce(fn, delay) {
  let timer;
  let tempoDeChamada;

  return (...args) => {
    tempoDeChamada = Date.now();

    clearTimeout(timer);

    timer = setTimeout(() => {
      intervalo = Date.now() - tempoDeChamada;
      fn(intervalo, ...args);
    }, delay);
  };
}

function olaMundo(intervalo) {
  console.log("Olá, mundo");
  console.log("Executou após:", (intervalo / 1000).toFixed(3), "s");
}

const debouncedOlaMundo = debounce(olaMundo, 3000);

debouncedOlaMundo();

setTimeout(() => {
  debouncedOlaMundo();
}, 2000);

setTimeout(() => {
  debouncedOlaMundo();
}, 3000);
