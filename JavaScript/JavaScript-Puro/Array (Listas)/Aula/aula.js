

const notas = []

notas.push(6)
notas.push(7)
notas.push(7)
notas.push(9)
notas.push(10)
notas.push(8)

let soma = 0

for (let i = 0; i < notas.length; i++) {

    const nota = notas[i]
    
    soma = soma + nota
}

const media = soma / notas.length

console.log(soma)
console.log('A sua média é: ' + media.toFixed(1))