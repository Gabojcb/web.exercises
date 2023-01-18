const buttonInit = document.querySelector(".container__button-init");
const container = document.querySelector(".container");
const input = document.querySelector(".container__input-survey-title");
const containerOptions = document.querySelector(".container__display-inputs");
const displayOption = document.querySelectorAll(".display__input-option");
const displayOptionArray = Array.from(displayOption);

let tpl_option = `<input type="text" class="display__input-option" id="option" placeholder="+Add">`;
const getTpl = (value) => `
<form action="#" class="container__form">
        <div class="message__form-show-title">${value}</div>
    </form>`;

const getOptions = (values) => `
<div class="container__options-flexbox">
     <input type="checkbox">
    <div class="options-div">${values}</div>  
</div>
`;

const addOption = (container) => containerOptions.insertAdjacentHTML("beforeend", tpl_option);

buttonInit.addEventListener("click", (event) => {
    const formTpl = getTpl(input.value);
    console.log(displayOption.values);
    container.insertAdjacentHTML("beforeend", formTpl);
});

//Inserto fuera de la funcion un input al que luego guardare en una variable

addOption(containerOptions);
const optionElement = document.querySelectorAll("#option");

function addButton() {
    //Input que inserte
    const loop = (op) => {
        const onFocus = () => {
            //Por cada foco al elemento se inserta otro nuevo
            addOption();
            //Guardo en una variable actualizando los nuevos input que esten
            const newSelectElement = document.querySelectorAll("#option");
            newSelectElement.forEach((element) => {
                element.removeEventListener("focus", addOption);
                element.addEventListener("focus", addOption);
            });
        };
        op.addEventListener("focus", onFocus);
    };
    optionElement.forEach(loop);
}

addButton();
