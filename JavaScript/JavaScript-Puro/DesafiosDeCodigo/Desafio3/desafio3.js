/*

3) Faça um programa que calcule e imprima o salário salário a ser transferido para um funcionário.
Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
O salário a ser transferido é calculado da seguinte maneira: 
   
   valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

Para calcular o percentual de imposto segue as aliquotas:

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a	R$ 2500.00 = 10.00%
    Maior que 2500.00 = 15.00%

    Exemplo:
        Entrada:
            2000
            250

        Saída:
            2050.00

*/

const { gets, print }  = require('./funcoes-auxiliares')

const salario = parseInt(gets())
const beneficios = parseInt(gets())

let percentual = 0

let salarioComImpostos = 0

function percentualComBaseEmSalario (salario) {
    if (salario > 0 && salario <= 1100) {

        percentual = 5

    } else if (salario > 1100 && salario <= 2500) {

        percentual = 10

    } else if (salario > 2500) {

        percentual = 15

    }
}

function calcularProcetagem (salario, procentagem) {


    if (salario > 0 && salario <= 1100) {

        const imposto = (procentagem / 100) * salario
        
        salarioComImpostos = salario -= imposto

} else if (salario > 1100 && salario <= 2500) {

    const imposto = (procentagem / 100) * salario
        
     salarioComImpostos = salario -= imposto

} else if (salario > 2500) {

    const imposto = (procentagem / 100) * salario
        
     salarioComImpostos = salario -= imposto

}

}




percentualComBaseEmSalario(salario)

calcularProcetagem(salario, percentual)


let salarioFinal = salarioComImpostos += beneficios


print(salarioFinal)