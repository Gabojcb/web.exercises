
let write = document.querySelector('.toWrite');
let addSend = document.querySelector('.sendTask');
let boton = document.querySelectorAll('.showTask');
const show = document.querySelector('.show');
const eraseButtons = document.querySelectorAll('.btn_delete');

addSend.addEventListener('click', addTask);
function addTask(){
    let div = `<div class="showTask">${write.value}<input class="checkbox" type="checkbox"><button class="btn_delete">remove</button></div>`;
    div.innerHTML;
    console.log(`Hiciste click y este estu valor ${div}`);    
    show.insertAdjacentHTML('afterbegin', div);
}
 
function removeTask(event){
    const target = event.currentTarget;
}

eraseButtons.forEach(btn=> {
    btn.addEventListener('click', removeTask);
 }
    











