function myNameIs (nome) {
    console.log('Meu nome é: ' + nome)
}

function verificandoIdade (idade, nome) {
    if (idade >= 18){
        console.log(nome + " é maior de idade.")
    }else if (idade < 18){
        console.log(nome + " não é maior de idade!")
    }
}

myNameIs("Rikelmy")

verificandoIdade(18, "Rikelmy")