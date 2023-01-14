const button1 = document.querySelector(".button_1");
const button2 = document.querySelector(".button_2");
const button3 = document.querySelector(".button_3");
const button4 = document.querySelector(".button_4");
const button5 = document.querySelector(".button_5");
const button6 = document.querySelector(".button_6");
const button7 = document.querySelector(".button_7");
const button8 = document.querySelector(".button_8");
const button9 = document.querySelector(".button_9");

const buttonsBoxes = document.querySelectorAll(".boxes");
const buttonReset = document.querySelector(".reset");
const messageWin = document.querySelector(".messages__border");

let character = "X";

buttonsBoxes.forEach(btn => {
    btn.addEventListener("click", () => {
            addXAndO(btn)
            resetGame(btn);
            howToWin();
    })
})


function addXAndO(button) {
    if(button.value === "") {
        button.innerHTML = character;
        character = character === "X" ? "O" : "X";
    } 

}

function resetGame(button) {
    buttonReset.addEventListener("click", ()=> {
        button.innerHTML = "";
        messageWin.innerHTML = "Tic Tac Toe Game";
    });
}

function howToWin() {
    if(button1.innerHTML === "X" && button2.innerHTML === "X" && button3.innerHTML === "X" ||
    button1.innerHTML === "X" && button4.innerHTML === "X" && button7.innerHTML === "X" || 
    button1 .innerHTML === "X" && button5.innerHTML === "X" && button9.innerHTML === "X" ||
    button3.innerHTML === "X" && button6.innerHTML === "X" && button9.innerHTML === "X" || 
    button3.innerHTML === "X" && button5.innerHTML === "X" && button7.innerHTML === "X" ||
    button4.innerHTML === "X" && button5.innerHTML === "X" && button6.innerHTML === "X" || 
    button7.innerHTML === "X" && button8.innerHTML === "X" && button9.innerHTML === "X" ||
    button2.innerHTML === "X" && button5.innerHTML === "X" && button8.innerHTML === "X" 
    ) {
       messageWin.innerHTML = "I WIN: X";
    } else if (
    button1.innerHTML === "O" && button2.innerHTML === "O" && button3.innerHTML === "O" ||
    button1.innerHTML === "O" && button4.innerHTML === "O" && button7.innerHTML === "O" || 
    button1 .innerHTML === "O" && button5.innerHTML === "O" && button9.innerHTML === "O" ||
    button3.innerHTML === "O" && button6.innerHTML === "O" && button9.innerHTML === "O" || 
    button3.innerHTML === "O" && button5.innerHTML === "O" && button7.innerHTML === "O" ||
    button4.innerHTML === "O" && button5.innerHTML === "O" && button6.innerHTML === "O" || 
    button7.innerHTML === "O" && button8.innerHTML === "O" && button9.innerHTML === "O" ||
    button2.innerHTML === "O" && button5.innerHTML === "O" && button8.innerHTML === "O"    
    ) {
        messageWin.innerHTML = "I WIN: O";
    }
}
