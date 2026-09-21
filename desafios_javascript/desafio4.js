// Desafio 4 — Números primos
// Devolve true se n for primo, false caso contrário.

function ehPrimo(n) {
  if (n < 2) {
    return false;
  }

  for (let divisor = 2; divisor < n; divisor++) {
    if (n % divisor === 0) {
      return false;
    }
  }

  return true;
}


console.log(ehPrimo(7)); 
console.log(ehPrimo(9)); 


let primos = [];
for (let numero = 2; numero <= 50; numero++) {
  if (ehPrimo(numero)) {
    primos.push(numero);
  }
}
console.log("primos:", primos.join(", "));