// Define a classe
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  // Define um método
  atacar() {
    let ataque;

    // Define o ataque com base no tipo
    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "fez um ataque indefinido";
    }

    // Exibe a mensagem do ataque
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de uso
const heroi1 = new Heroi("Artemis", 30, "mago");
heroi1.atacar(); // O mago atacou usando magia

const heroi2 = new Heroi("Thor", 35, "guerreiro");
heroi2.atacar(); // O guerreiro atacou usando espada

const heroi3 = new Heroi("Lian", 25, "monge");
heroi3.atacar(); // O monge atacou usando artes marciais

const heroi4 = new Heroi("Shadow", 20, "ninja");
heroi4.atacar(); // O ninja atacou usando shuriken
