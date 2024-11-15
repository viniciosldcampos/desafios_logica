//Desafio Classificador de nível de Herói

//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões
//## Objetivo
//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
const name = "Batman";
let nivelxp = 1000000;

switch (true) {
  //Se XP for menor do que 1.000 = Ferro
  case nivelxp < 1000:
    console.log("XP do herói está no nível Ferro");
    break;
  //Se XP for entre 1.001 e 2.000 = Bronze
  case nivelxp >= 1001 && nivelxp <= 2000:
    console.log("XP do herói está no nível Bronze");
    break;
  //Se XP for entre 2.001 e 5.000 = Prata
  case nivelxp >= 2001 && nivelxp <= 5000:
    console.log("XP do herói está no nível Prata");
    break;
  //Se XP for entre 5.001 e 7.000 = Ouro
  case nivelxp >= 5001 && nivelxp <= 7000:
    console.log("XP do herói está no nível Ouro");
    break;
  //Se XP for entre 7.001 e 8.000 = Platina
  case nivelxp >= 7001 && nivelxp <= 8000:
    console.log("XP do herói está no nível Platina");
    break;
  //Se XP for entre 8.001 e 9.000 = Ascendente
  case nivelxp >= 8001 && nivelxp <= 9000:
    console.log("XP do herói está no nível Ascendente");
    break;
  //Se XP for entre 9.001 e 10.000= Imortal
  case nivelxp >= 9001 && nivelxp <= 10000:
    console.log("XP do herói está no nível Imortal");
    break;
  //Se XP for maior ou igual a 10.001 = Radiante
  case nivelxp > 10001:
    console.log("XP do herói está no nível Radiante");
    break;
  default: //Se XP for valor diferente aparece essa mensagem na tela
    console.log("Nível de XP não reconhecido");
}

// Saída final
console.log(`O Herói de nome ${name} está no nível de XP ${nivelxp}`);
