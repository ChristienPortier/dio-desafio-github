/*
Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 -100.
Faca um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.

Dados de entrada:
5
50
10
98
23

Saida:
98
*/

// const {gets, print} = require('./aula_funcoes_auxiliares');

// const numerosSorteados = [];

// for (let i = 0; i < 5; i++) {
//     const numerosSorteado = gets();
//     numerosSorteados.push(numerosSorteado);    
// }

// let maiorValor = 0;

// for (let i = 0; i < numerosSorteados.length; i++) {
//     const numerosSorteado = numerosSorteados[i];
//     if(numerosSorteado > maiorValor){
//         maiorValor = numerosSorteado;
//     }    
// }
// print(maiorValor);

//Outra maneira de fazer o codigo:

const {gets, print} = require('./aula_funcoes_auxiliares');

let maiorValorEncontrado = 0;

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado
    }  
}

print(maiorValorEncontrado);