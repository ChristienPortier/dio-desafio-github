/*faca um programa para calcular o valor de uma viagem.
Voce tera 5 variaveis. Sendo elas:
1 - Preco etanol;
2 - Preco gasolina;
3 - Tipo de combustivel no seu carro;
4 - Gasto medio de combustivel do carro por km;
5 - Distancia em KM da viagem;
imprima no console o valor gasto para realizar esta viagem.
*/

const precoEtanol = 4;
const precoGasolina = 5;
const kmPorLitros = 12;
const distancia = 120;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distancia / kmPorLitros;

if (tipoCombustivel === 'Etanol'){
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}else{
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

