//Projeto de Lógica de Programação usando JavaScript

const getUserChoice = (userInput) =>{

    //Verificando se a resposta do usuário é válida

    return (userInput == "rock") ? "rock"
        : (userInput == "paper") ? "paper"
        : (userInput == "scissors") ? "scissors"
        : "Escolha inválida, favor informar uma das opções listadas: " + "\n" + "\n" + "'rock'(pedra)," + "\n" + "'paper'(papel)" + "\n" + "'scissors'(tesoura)."

}

function getComputerChoice(){
    
    //Randomizando a resposta do computador (entre 0 e 2)

    let valor = Math.floor(Math.random() * (3 - 0)) + 0

    return (valor == 0) ? "rock"
        : (valor == 1) ? "paper"
        : (valor == 2) ? "scissors"
        : "Inconclusivo"

}

function determineWinner(userChoice, computerChoice){

    //Determinando vencedor

    return (computerChoice == userChoice) ? "Ocorreu um empate"
                : ((computerChoice == "rock") && (userChoice == "paper")) ? "Você venceu!"
                : ((computerChoice == "rock") && (userChoice == "scissors")) ? "Você perdeu!"
                : ((computerChoice == "paper") && (userChoice == "scissors")) ? "Você venceu!"
                : ((computerChoice == "paper") && (userChoice == "rock")) ? "Você perdeu!"
                : ((computerChoice == "scissors") && (userChoice == "rock")) ? "Você venceu!"
                : ((computerChoice == "scissors") && (userChoice == "paper")) ? "Você perdeu!"
                : "Inconclusivo."
    
}

function playGame(){
    
    //Executando o Jogo

    alert("Iniciando o Game")

    let userInput = prompt("Informe 'rock'(pedra), 'paper'(papel) ou 'scissors'(tesoura): ").toLowerCase()
    
    let userChoice = getUserChoice(userInput) 
    let computerChoice = getComputerChoice() 

    alert("Usuário: " + userChoice + "\n" + "\n" + "Computador: " + computerChoice + "\n" + "\n" + "Resultado: " + determineWinner(userChoice, computerChoice))

    alert("Fim do Game" + "\n" + "\n" + "Obrigado por jogar!")
}

playGame() //Iniciar Game