/*
Faca um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua media e a sua classificacao conforme a tabela abaixo:

Media = (nota 1 + nota 2 + nota 3) / 3;

Classificacao:
- Media menos 5, reprovacao;
- Media entre 5 - 7, recuperacao;
- Media acima de 7, passou de semestre;
*/

const nota_1 = 7;
const nota_2 = 9;
const nota_3 = 8;
const media = (nota_1 + nota_2 + nota_3) / 3;

console.log(media);

if (media < 5) {
    console.log('O aluno esta reprovado.');
} else if (media >= 5 && media <= 7) {
    console.log('O aluno esta de recuperacao');
} else {
    console.log('O aluno esta aprovado.');
}
