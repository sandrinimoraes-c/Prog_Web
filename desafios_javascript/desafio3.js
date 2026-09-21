// Desafio 3 — Contador de vogais
// Devolve quantas vogais existem na palavra recebida.

function contarVogais(palavra) {
  const vogais = "aeiou";
  let contador = 0;

  
  const palavraSemAcento = palavra
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  for (const caractere of palavraSemAcento) {
    if (vogais.includes(caractere)) {
      contador++;
    }
  }

  return contador;
}

console.log(contarVogais("programação")); 
console.log(contarVogais("JavaScript")); 