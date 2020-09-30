/*
1 - Gerar um numero aleatorio entre 1 e 100
2 - Inicializar o numero de tentativas como 10
3 - Pedir o jogador para tenatr adivinhar o numero
4- Decrementar o numero de tentativas
5 - Verificar se a tentativa esta correta
6 - Se estiver correta:
    - Informar que acertou
    - Encerrar o jogo
7 - Se estiver incorreta, e sem tentativas:
    - Informar que ele não venceu
    - Encerrar o jogo
8 - Se estiver incorreta, mas com tentativas:
    - Informar se a tentativa é maior ou menor que o numero sorteado
    - Pedir outra tentativa para o jogador       
*/

var readline = require("readline")
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var numeroAleatorio = Math.round(Math.random() * 100)
if(numeroAleatorio === 0){
    numeroAleatorio = 1
}

var numeroTentativas = 10
console.log(numeroAleatorio)

pergunta()
function pergunta() {
    rl.question("Adivinhe o número que estou pensando: ", function(numero){
        
        numero = parseInt(numero)
        console.log(numero)
        numeroTentativas --
    
        if(numero === numeroAleatorio){
            console.log("Woow! Você é fera, ein bichão!")
            rl.close()
        } else if (numeroTentativas === 0){
            console.log("Que pena, suas chances acabaram!")
            rl.close()
        } else if (numero > numeroAleatorio){
            console.log("Não é esse esse, mas você tem mais " +  numeroTentativas + " chances! " 
            + "E o número sorteado é maior do que o digitado.")
            pergunta()
        } else if (numero < numeroAleatorio){
            console.log("Não é esse esse, mas você tem mais " +  numeroTentativas + " chances! " 
            + "E o número sorteado é menor do que o digitado.")
            pergunta()
        }
    })
}