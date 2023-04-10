/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preco normal de etiqueta e a escolha da condicao de pagamento.
Utilize os codigos da tabela a seguir para ler qual a consicao de pagamento escolhida e efetuar o calculo adequado.

Codigo Consicao de pagemento:
1 - A vista Debito, recebe 10% de desconto;
2 - A vista no dinheiro ou PIX, recebe 15% de desconto;
3 - em duas vezes, preco normal de etiqueta sem juros;
4 - acima de duas vezes, preco normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1){
    const preco=precoEtiqueta-(precoEtiqueta*0.1);
    console.log(preco)
}else if(formaDePagamento === 2){
    const preco=precoEtiqueta-(precoEtiqueta*0.15);
    console.log(preco)
}else if(formaDePagamento === 3){
    const preco=precoEtiqueta;
    console.log(preco)
}else{
    const preco=precoEtiqueta+(precoEtiqueta*0.1)
    console.log(preco)
}