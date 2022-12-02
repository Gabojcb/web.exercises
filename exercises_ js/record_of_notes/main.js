// Selecciono los elementos necesarios
const inputName = document.querySelector('.record_names');
const inputDegree = document.querySelector('.record_degree');
const inputMath = document.querySelector('.record_math');
const inputEnglish = document.querySelector('.record_english');
const inputHistory = document.querySelector('.record_history');

let stored = [];
    if (localStorage.getItem('list')) {
        objList = JSON.parse(localStorage.getItem('list'));
    }

// Creo un evento click sobre el boton de evaluar asociada a la funcion para evaluar los resultados
const btnEvaluate = document.querySelector('.btn_event');
btnEvaluate.addEventListener('click', evaluateResults);

function evaluateResults() {
    const tHead = document.querySelector('.header_table');
    
    // Creo un arreglo vacio
    let grade = [];     
    
    // Inserto los valores de las materias en el arreglo
    grade.push(inputMath.value);
    grade.push(inputEnglish.value);
    grade.push(inputHistory.value);

    // Sumo el valor de las materias y la divido segun la longitud del arreglo
    let total = (parseFloat(inputMath.value)+parseFloat(inputEnglish.value)+parseFloat(inputHistory.value))/grade.length;

    //Inserto dinamicamente en el elemento table un tr con los datos del estudiante
    const tdDynamic = `<tr>
    <td class="info_td">${inputName.value}</td>
    <td class="info_td">${inputDegree.value}to</td>
    <td class="info_td">${inputMath.value}</td>
    <td class="info_td">${inputEnglish.value}</td>
    <td class="info_td">${inputHistory.value}</td>
    <td class="info_td color_highlightead">${Math.round(total)}</td>
</tr>`;
    
    tHead.insertAdjacentHTML('beforeend', tdDynamic);
    
    // Mando a llamar la funcion que guardara los datos en el localStorage
    dataStorage();
}


function dataStorage() {
    function Storage(name, degree, math, english, history) {
        this.name = name,
        this.degree = degree,
        this.math = math,
        this.english = english,
        this.history = history
    }
    const insert = new Storage(inputName.value, inputDegree.value, inputMath.value, inputEnglish.value, inputHistory.value);

    // Inserto los elementos en un arreglo vacio
    stored.push(insert);

    // Transformo el objeto a un cadena de texto json   
    localStorage.setItem('list', JSON.stringify(stored));
    console.log(objList);

}
    
console.log(localStorage.getItem('list'));
    
