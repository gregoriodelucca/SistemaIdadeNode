// sistema de cadastro autorização

let readline = require('readline-sync')
let nome = readline.question('Qual éo seu nome?\n')
let idade = readline.questionInt('digite sua idade:')

if (idade >= 18){
    console.log(`Olá, ${nome} bem vindo, você tem permissão`)
}

else if (idade >= 15) {
    console.log(`Olá ${nome}, você precisa da carta autorização os pais!`)
}

else {
    console.log(`Olá ${nome}, você ainda é de menor, sinto muito!`)
}