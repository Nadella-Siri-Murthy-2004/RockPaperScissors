let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");
const userScorePara  = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () => {
    const options = ["rock","paper","scissors"];
    // rock,paper,scissors
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}

const drawGame = () => {
    // console.log("Game was Draw");
    msg.innerText = "😌 It's a Draw, Play again! 😌";
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Won the game");
        msg.innerText = "🥳 You Won the game! 🥳";
        msg.style.backgroundColor = "green";t
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You lost the game");
        msg.innerText = "😔 You Lost the game! 😔";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    // Generate computer choice -> Modular way of programming making functions for small tasks
    const compChoice = getCompChoice();
    // console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false :true;
        }else{
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice); 
    }
}


choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})