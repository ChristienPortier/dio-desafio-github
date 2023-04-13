// class Pessoa{
//     nome;
//     idade;
//     anoDeNascimento;

//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//         this.anoDeNascimento = 2023 - idade;
//     }

//     descrever() {
//         console.log('Meu nome eh ${this.nome} e minha idade eh ${this.idade}');
//     }
// }

// const christien = new Pessoa('Christien', 39);


// console.log(christien);

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log('Meu nome eh ${this.nome} e minha idade eh ${this.idade}');
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} eh mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} eh mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const chris = new Pessoa('Chris', 39);
const grazy = new Pessoa('Grazy', 36);

compararPessoas(chris, grazy);