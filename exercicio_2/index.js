//Calculadora de partidas Rankeadas
//**O Que deve ser utilizado**

//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões
//- Funções

//## Objetivo:

//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

let username = "Spider Men";
let vitorias = 50;
let derrotas = 34;

function jogador(vitorias, derrotas) {
  let saldovitorias = vitorias - derrotas;
  let nivel;

  //Se vitórias for menor do que 10 = Ferro
  if (saldovitorias <= 10) {
    nivel = "Heroí nível Ferro";
  }
  //Se vitórias for entre 11 e 20 = Bronze
  else if (saldovitorias >= 11 && saldovitorias <= 20) {
    nivel = "Heroí nível Bronze";
  }
  //Se vitórias for entre 21 e 50 = Prata
  else if (saldovitorias >= 21 && saldovitorias <= 50) {
    nivel = "Heroí nível Prata";
  }
  //Se vitórias for entre 51 e 80 = Ouro
  else if (saldovitorias >= 51 && saldovitorias <= 80) {
    nivel = "Heroí nível Ouro";
  }
  //Se vitórias for entre 81 e 90 = Diamante
  else if (saldovitorias >= 81 && saldovitorias <= 90) {
    nivel = "Heroí nível Diamante";
  }
  //Se vitórias for entre 91 e 100= Lendário
  else if (saldovitorias >= 91 && saldovitorias <= 100) {
    nivel = "Heroí nível Lendário";
  }
  //Se vitórias for maior ou igual a 101 = Imortal
  else if (saldovitorias >= 101) {
    nivel = "Heroí nível Imortal";
  }

  return { saldovitorias, nivel };
}

let resultado = jogador(vitorias, derrotas);

console.log(
  `O heroí de nome ${username} tem de saldo de ${resultado.saldovitorias} e está no nível de ${resultado.nivel}`
);
