/*
1 - Crie um aclasse para representar carros:
Os carros possuem uma marca, uma cor e um gasto medio de combustivel por kilometro rodado.
Crie um metodo que dado a quantidade de quilometros e o preco do combustivel nos de o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distancia, precoCombustivel){
        return distancia * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carros(`Fiat`, `Prata`, 1/12);


console.log(uno.calcularGastoDePercurso(70, 5));
