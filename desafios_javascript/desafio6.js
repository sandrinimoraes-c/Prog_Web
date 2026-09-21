// Desafio 6 — Palíndromo
// Devolve true se o texto for um palíndromo, ignorando maiúsculas/minúsculas.

function ehPalindromo(texto) {
  const textoTratado = texto.toLowerCase();
  const tamanho = textoTratado.length;

  for (let i = 0; i < tamanho / 2; i++) {
    const inicio = textoTratado[i];
    const fim = textoTratado[tamanho - 1 - i];

    if (inicio !== fim) {
      return false;
    }
  }

  return true;
}


console.log(ehPalindromo("Arara")); 
console.log(ehPalindromo("Casa")); 