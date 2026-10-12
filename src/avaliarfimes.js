export function avaliarFimes(listaDeFimes) {
  let resultado = [];

  listaDeFimes.forEach((filme) => {
    let quantidadeDeVotos = filme.avaliacoes.length;
    let somaDasNotas = 0;

    filme.avaliacoes.forEach((nota) => {
      somaDasNotas += nota;
    });

    let media = somaDasNotas / quantidadeDeVotos;
    let avaliacaoFinal = "";

    if (media >= 4) {
      avaliacaoFinal = "Filme recomendado";
    } else if (media >= 3 && media < 4) {
      avaliacaoFinal = "Filme razoável";
    } else if (media < 3) {
      avaliacaoFinal = "Filme ruim";
    }

    resultado.push({
      nome: filme.nome,
      totalVotos: quantidadeDeVotos,
      media: Number(media.toFixed(1)),
      classificacao: avaliacaoFinal,
    });
  });
  return resultado;
}
