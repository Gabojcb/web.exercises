import {taskList} from './obj.js';


let write = document.querySelector('.to_write');
let addSend = document.querySelector('.send_task');
// let elementDiv = document.querySelectorAll('.show_task');
const show = document.querySelector('.show');

addSend.addEventListener('click', addTask);
function addTask(){
    let div = `<div class="show_task">${write.value}<input class="checkbox" type="checkbox"><button class="btn_delete">remove</button></div>`;
    div.innerHTML;   
    show.insertAdjacentHTML('afterbegin', div);

    const eraseButtons = document.querySelectorAll('.btn_delete');
    eraseButtons.forEach(btn => {
        btn.removeEventListener('click', addTask);
        btn.addEventListener('click', removeTask);
    })
}
    
function removeTask(event) {
    let target = event.currentTarget;
    target.parentNode.remove();
 }
 
 
    











