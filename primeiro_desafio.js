/*
Faca um programa para calcular o valor de combustivel em uma viagem.

Voce tera 3 variaveis. Sendo elas:
1 - Preco do combustivel;
2 - Valor medio de combustivel do carro por KM;
3 - Distancia em KM da viagem;

Imprima no console o valor que sera gasto de combustivel para realizar esta viagem.
*/

const preco = 4;
const kmPorLitros = 12;
const distancia = 120;

const litrosConsumidos = distancia / kmPorLitros;
const valorGasto = litrosConsumidos * preco;

console.log(valorGasto.toFixed(2));