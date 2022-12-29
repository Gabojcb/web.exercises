const displayBtn = document.querySelector(".container_input-display");
const keypad = document.querySelectorAll(".keypad_btn-num-operation");
const btnNum = document.querySelectorAll(".keypad_btn-num");
const btnCalculate = document.querySelectorAll(".keypad_btn-calculate");
const btnOperation = document.querySelectorAll(".keypad_btn-operation");
const btnIgualdad = document.querySelector(".keypad_btn-igualdad");

function displayButton() {
    keypad.forEach(btn => {
        btn.addEventListener("click", ()=> {

            if (displayBtn.innerHTML === "0") {
                displayBtn.innerHTML = "";
            }
            displayBtn.innerHTML +=  btn.innerHTML;  
            
            if(btn.innerHTML === "c") {
                deleteBtn(displayBtn);
            };
        })  
    })
}

function some() {
    btnCalculate.forEach(button => {
        button.addEventListener("click", ()=> {
            
            if(button.innerHTML === "=") {
                calculator(displayBtn)
            }  
        })
    })
}

some();

displayButton();

function deleteBtn(display) {
        display.innerHTML = "0";
}

function calculator(display) {
    display.innerHTML = eval(display.innerHTML);
}
