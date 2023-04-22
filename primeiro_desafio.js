/*
Faca um programa para calcular o valor de combustivel em uma viagem.

Voce tera 3 variaveis. Sendo elas:
1 - Preco do combustivel;
2 - Valor medio de combustivel do carro por KM;
3 - Distancia em KM da viagem;

Imprima no console o valor que sera gasto de combustivel para realizar esta viagem.
*/

// const preco = 4;
// const kmPorLitros = 12;
// const distancia = 120;

// const litrosConsumidos = distancia / kmPorLitros;
// const valorGasto = litrosConsumidos * preco;

// console.log(valorGasto.toFixed(2));

const numPedidos = parseInt(gets());

for (let i = 1; i <= numPedidos; i++) {
  const prato = gets();
  const calorias = parseInt(gets());
  //Explicação: atribui "true" se o valor lido via gets() for estritamente igual a 's'.
  //Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators
  const ehVegano = gets().toLowerCase() === 's';

  //TODO: Tendo em vista a variável booleana "ehVegano", imprima a saída deste desafio.
  const vegano = ehVegano ? 'Vegano' : 'Nao Vegano';
  
  print(`Pedido ${i}: ${prato} (${vegano}) - ${calorias} calorias`);
  }