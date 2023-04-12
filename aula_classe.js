class Pessoa{
    nome;
    idade;

    descrever() {
        console.log('Meu nome eh ${this.nome} e minha idade eh ${this.idade}');
    }
}

const christien = new Pessoa();
christien.nome = 'Christien Portier';
christien.idade = 39;

console.log(christien);