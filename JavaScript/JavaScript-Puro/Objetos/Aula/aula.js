class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const Rikelmy = new Pessoa()
Rikelmy.nome = "Rikelmy C Batista"
Rikelmy.idade = 16

Rikelmy.descrever() 



/*const Rikelmy = {
    nome: "Rikelmy C Batista",
    idade: 16,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}*/