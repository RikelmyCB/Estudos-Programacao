/*

Faça um Algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima sua media e classificação conforme a tabela abaixo:

Média = (Nota 1 + Nota 2 + Nota 3) /3

Classificação:

 - Media menor que 5: Reprovado

 - Média entre 5 e 7: Recuperação

 - Média acima de 7: Passou de semestre

*/

const nota1 = 8
const nota2 = 8
const nota3 = 8

const mediaDoAluno = (nota1 + nota2 + nota3) / 3
console.log(mediaDoAluno)

if (mediaDoAluno < 5){
    console.log("Reprovado!")
}else if (mediaDoAluno >= 5 && mediaDoAluno <= 7) {
    console.log("Está de Recuperação meu anjo!")
}else if (mediaDoAluno > 7){
    console.log("Passou de Semestre!")
}
