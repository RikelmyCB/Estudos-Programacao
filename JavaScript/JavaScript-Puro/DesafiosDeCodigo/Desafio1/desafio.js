/*

1) Faça um programa que receba a média de um aluno.
Caso a média seja < 5 imprima "Reprovado"
Caso a média seja >= 5 e < 7 imprima "Recuperação"
Caso a média seja >= 7 imprima "Aprovado"

    Exemplo:
        Entrada:
            5.5
        Saída:
            Recuperação

*/

const {gets, print} =  require('./funcoes-auxiliares')

const notaDoAluno = gets()

if (notaDoAluno < 5) {
    print('Saída: Reprovado')
} else if (notaDoAluno >= 5 && notaDoAluno < 7) {
    print('Saída: Recuperação')
} else if (notaDoAluno > 7) {
    print ('Saída: Aprovado')
}

print("Entrada: " + gets())