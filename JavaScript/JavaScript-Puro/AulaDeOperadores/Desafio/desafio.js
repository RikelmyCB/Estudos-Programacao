/*  ====================  DESAFIO  =========================

Faça um programa para calcular o custo de uma viagem.

Voce terá 3 variáveis, sendo elas:

1 - Preço do Combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Preço do Combustível: 
Distância:

Imprima no console o valor gasto para realizar a viagem completa.*/

const precoCombustivel = 4.79
const distanciaEmKm = 1592
const kmPorLitro = 10

const valorASerGasto = distanciaEmKm / kmPorLitro * precoCombustivel

console.log(valorASerGasto.toFixed(2))