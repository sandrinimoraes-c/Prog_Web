// Desafio 2 — Estatísticas de notas
// Calcula quantidade de aprovados, média da turma e maior nota.

function estatisticasNotas(notas) {
  let soma = 0;
  let aprovados = 0;
  let maior = notas[0];

  for (const nota of notas) {
    soma += nota;

    if (nota >= 6) {
      aprovados++;
    }

    if (nota > maior) {
      maior = nota;
    }
  }

  const media = soma / notas.length;

  console.log(`Aprovados: ${aprovados} | Média: ${media.toFixed(1)} | Maior: ${maior}`);

  return { aprovados, media, maior };
}

const notas = [7, 4, 9, 5, 8];
estatisticasNotas(notas);