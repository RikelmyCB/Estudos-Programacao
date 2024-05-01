// Crie um programa que percorra uma lista de numeros e imprima cada numero par encontrado

const listaDeNumeros = [1, 2, 6, 3 ,6 ,8, 3, 4, 7]

for ( i = 0; i <= listaDeNumeros.length; i++) {

    const numero = listaDeNumeros[i]

    if (numero % 2 === 1) {
        console.log(numero)
    }
}


const numerosPares = [];

    for (let i = 0; i < 10; i = i + 2) {
        numerosPares.push(i);
    }

    console.log(numerosPares);