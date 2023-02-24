const accountCreationButton = document.querySelector(".container__button-init");
const containerTotal = document.querySelector(".container");
const containerOptions = document.querySelector(".container__display-inputs"); 
import { addInput } from "./add-input.js";

const addOption = (itemIncluded) => containerOptions.insertAdjacentHTML("beforeend", itemIncluded);

const option = document.querySelectorAll(".display__input-option");

let tplOption = `<input type="text" class="display__input-option" id="option" placeholder="+Add">`;
addOption(tplOption);
const optionElement = document.querySelectorAll("#option");

function addButton() {
    const loop = (op) => {
        addInput(op, containerOptions, tplOption);
        addInput(op, containerOptions, tplOption);
    }
    optionElement.forEach(loop);
}
addButton();


const getTpl = (value) => `
    <form action="#" class="container__form" id="form">
        <div class="message__form-show-title">${value}</div>
    </form>
    `;

 const getOptions = (value) => `
    <div class="container__options-flexbox">
    <label for="#" class="options-div"><input type="radio" class="checkbox">${value}</label><br> 
    </div>`;
    
const getButton = () => `
<button class="reset-survey">remove</button>
`   
  
const titleSurvey = document.querySelector(".container__input-survey-title");


accountCreationButton.addEventListener("click", ()=> {
    const inputNode = document.querySelectorAll(".display__input-option");
    
        const formTpl = getTpl(titleSurvey.value);
        containerTotal.insertAdjacentHTML("beforeend", formTpl);
        const containerForm = document.querySelector(".container__form");

            const inputArray = Array.from(inputNode);
            const modifiedInput = inputArray.map((item) => item.value);
            modifiedInput.forEach((item)=> {
                const showOptionsInForm = getOptions(item);
                containerForm.insertAdjacentHTML("beforeend", showOptionsInForm);
            })
           
        const btn = getButton() 
        containerForm.insertAdjacentHTML("beforeend", btn);
        
        const remove = () => {
            const btnRemove = document.querySelector(".reset-survey");
            btnRemove.addEventListener("click", remove);
        
            containerForm.remove();
        }
})
