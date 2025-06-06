# 💻 Exercícios de Lógica de Programação com Node.js

Segunda lista de exercícios de lógica do **Dev Full Stack Jr** da **+PraTi**.

---

## 🚀 Como rodar os exercícios

Siga os passos abaixo para clonar o projeto e executar os arquivos:

```bash
# Clone o repositório
git clone https://github.com/lsguilherme/lista-de-exercicio2-praTi.git

# Acesse a pasta do projeto
cd nome-do-projeto

# Instale as dependências (caso existam)
npm install

# Acesse a pasta com os exercícios
cd pasta/exercicios

# Rode o exercício desejado substituindo o número abaixo
node .\[numero-do-arquivo].js

Exemplo: node .\01.js
```

# 📋 Requisitos

- Node.js versão 18.20.6 ou superior

# 🚀 Lista de Exercícios

## Seção 1: Estruturas de Controle Avançadas

1. **Validação de Datas**  
   Crie a função `ehDataValida(dia, mes, ano)` que retorna `true` se os valores formarem uma data real (considerando meses com 28–31 dias e ano bissexto para fevereiro) e `false` caso contrário.

2. **Jogo de Adivinhação**  
   Gere um número aleatório de 1 a 100. Use `while` para pedir ao usuário que adivinhe até acertar, contando tentativas e exibindo "mais alto" ou "mais baixo" conforme o palpite.

3. **Palavras Únicas**  
   Dada uma string como `"olá olá mundo mundo"`, use `if/else` e `for` para extrair palavras únicas e exibi-las em um array.

## Seção 2: Funções e Recursão

4. **Fatorial Recursivo**  
   Implemente `function fatorial(n)` de forma recursiva. Se `n < 0`, lance um `Error`. Se `n === 0`, retorne `1`.

5. **Debounce**  
   Crie `function debounce(fn, delay)` que retorna uma nova função. Esta função só executa `fn` se não for chamada novamente dentro do intervalo `delay` (ms).

6. **Memoization**  
   Implemente `function memoize(fn)` que armazena em cache chamadas anteriores de `fn`, retornando resultados imediatamente quando os mesmos argumentos forem passados.

## Seção 3: Arrays e Objetos Complexos

7. **Mapeamento e Ordenação**  
   Dado o array `produtos = [{ nome, preco }, ...]`, crie uma função que retorne um novo array apenas com os nomes, ordenados por `preco` crescente, usando `map` e `sort`.

8. **Agrupamento por Propriedade**  
   Dado `vendas = [{ cliente, total }, ...]`, use `reduce` para gerar um objeto onde cada chave é um cliente e o valor é a soma dos seus totais.

9. **Conversão Entre Formatos**
   - `paresParaObjeto(pares)` recebe um array de pares `[[chave, valor], ...]` e retorna o objeto equivalente.
   - `objetoParaPares(obj)` faz o inverso: converte um objeto em um array de pares.
