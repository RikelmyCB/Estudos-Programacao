/*  ====================  DESAFIO  =========================

Faça um programa para calcular o custo de uma viagem.

Voce terá 5 variáveis, sendo elas:

1 - Preço do Etanol;
2 - Preço da Gasolina;
3 - O tipo de combustivel que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Preço do Etanol: 4,79
Preço da Gasolina: 5,39
Distância: 2417

Imprima no console o valor gasto para realizar a viagem completa.*/

const precoEtanol = 4.79
const precoGasolina = 5.39
const distanciaEmKm = 2417
const kmPorLitro = 12
let tipoDoCombustivel = "Etanol"

let gastoFinal = 0

const DistanciaPorLitro = distanciaEmKm /kmPorLitro

if (tipoDoCombustivel === "Gasolina") {
    gastoFinal = DistanciaPorLitro * precoGasolina
} else if (tipoDoCombustivel === "Etanol") {
    gastoFinal = DistanciaPorLitro * precoEtanol
}

console.log(gastoFinal.toFixed(2))
