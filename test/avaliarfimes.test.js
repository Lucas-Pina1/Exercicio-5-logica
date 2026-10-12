import { avaliarFimes } from "../src/avaliarfimes.js";
import assert from "assert";

describe("avaliarFimes", () => {
  it('CT01: Deve retornar "Filme recomendado" para média >= 4', () => {
    let entrada = [
      { nome: "Minha mãe é uma peça", avaliacoes: [5, 4, 4, 4, 5] },
    ];

    let resultadoEsperado = [
      {
        nome: "Minha mãe é uma peça",
        totalVotos: 5,
        media: 4.4,
        classificacao: "Filme recomendado",
      },
    ];

    let resultado = avaliarFimes(entrada);
    assert.deepStrictEqual(resultado, resultadoEsperado);
  });

  it('CT02: Deve retornar "Filme razoável" para média >= 3 e < 4', () => {
    let entrada = [{ nome: "Saneamento Básico", avaliacoes: [3, 4, 2, 3, 4] }];

    let resultadoEsperado = [
      {
        nome: "Saneamento Básico",
        totalVotos: 5,
        media: 3.2,
        classificacao: "Filme razoável",
      },
    ];

    let resultado = avaliarFimes(entrada);
    assert.deepStrictEqual(resultado, resultadoEsperado);
  });

  it('CT03: Deve retornar "Filme ruim" para média < 3', () => {
    let entrada = [{ nome: "Se eu fosse você", avaliacoes: [1, 2, 3] }];

    let resultadoEsperado = [
      {
        nome: "Se eu fosse você",
        totalVotos: 3,
        media: 2.0,
        classificacao: "Filme ruim",
      },
    ];

    let resultado = avaliarFimes(entrada);
    assert.deepStrictEqual(resultado, resultadoEsperado);
  });
});
