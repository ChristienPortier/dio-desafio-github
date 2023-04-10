/*
O IMC eh um criterio da organizacao mundial de saude para dar uma indicacao sobre a consicao de peso de um apessoa adulta.

Formula do IMC:
I
MC = peso / (altura * altura)

Elabore um algortimo que dado o peso e a altura de um adulto mostre sua consicao de acordo com a tabela abaixo.

IMC em adultos Consicao:

- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;
*/

const peso = 90.5;
const altura = 1.67;
const imc = peso / (altura * altura);

console.log(imc);

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc <= 25) {
    console.log('Peso normal');
} else if (imc > 25 && imc < 30) {
    console.log('Acima do peso');
} else if (imc >= 30 && imc <= 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade Grave');
}