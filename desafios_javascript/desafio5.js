// Desafio 5 — Sequência de Fibonacci
// Devolve os n primeiros termos da sequência de Fibonacci.

function fibonacci(n) {
  const sequencia = [];
  let anterior = 0;
  let atual = 1;

  for (let i = 0; i < n; i++) {
    sequencia.push(anterior);
    const proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }

  return sequencia;
}


console.log(fibonacci(7).join(", ")); 