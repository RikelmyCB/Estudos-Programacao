/* 

2) Faça um programa que receba N quantidade de números e seus respectivos valores.
Imprima o maior número par e o menor número impar.

    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            8

        Saída:
            Maior número par: 10
            Menor número impar: 1

*/

const { gets, print } = require('./funcoes-auxiliares')

let maiorNumeroPar = -1

let menorNumeroImpar = 1

let numeros = gets()


for (i = 0; i < numeros.length; i++) {

    let numeroSorteado = numeros[i]

if (numeroSorteado % 2 === 0 && numeroSorteado > maiorNumeroPar) {
maiorNumeroPar = numeroSorteado
} else if (numeroSorteado % 2 === 1 && numeroSorteado <= menorNumeroImpar) {
    maiorNumeroImpar = numeroSorteado
}

}

print(maiorNumeroPar)
print(menorNumeroImpar)