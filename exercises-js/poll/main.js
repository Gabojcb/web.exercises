const buttonInit = document.querySelector(".container__button-init");
const container = document.querySelector(".container");
const input = document.querySelector(".container__input-survey-title");
const containerOptions = document.querySelector(".container__display-inputs");
const displayOption = document.querySelectorAll(".display__input-option"); 
const displayOptionArray = Array.from(displayOption); 

buttonInit.addEventListener("click", ()=> {
    const formTpl = `<form action="#" class="container__form">
        <div class="message__form-show-title">${input.value}</div>
    </form>`;
    const options = `
    <div class="container__options-flexbox">
         <input type="checkbox">
        <div class="options-div">${displayOption.values}</div>  
    </div>`;

    console.log(displayOption.values);
    container.insertAdjacentHTML("beforeend", formTpl);
})

//Inserto fuera de la funcion un input al que luego guardare en una variable
let tpl_option = `<input type="text" class="display__input-option" id="option" placeholder="+Add">`;
containerOptions.insertAdjacentHTML("beforeend", tpl_option);
const optionElement = document.querySelectorAll("#option");

function addButton() {
    //Input que inserte 
    optionElement.forEach(op => {
        op.addEventListener("focus", function addAnotherOption() {
            //Por cada foco al elemento se inserta otro nuevo
            containerOptions.insertAdjacentHTML("beforeend", tpl_option);
            //Guardo en una variable actualizando los nuevos input que esten
            const newSelectElement = document.querySelectorAll("#option");
            newSelectElement.forEach(element => {
                element.removeEventListener("focus", addAnotherOption);
                element.addEventListener("focus", ()=> {
                    containerOptions.insertAdjacentHTML("beforeend", tpl_option);
                })
            })
        });  
     })
}

addButton();