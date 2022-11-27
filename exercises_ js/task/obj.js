
 class TaskList {
         addTask(){
            let div = `<div class="show_task">${write.value}<input class="checkbox" type="checkbox"><button class="btn_delete">remove</button></div>`;
    div.innerHTML;   
    show.insertAdjacentHTML('afterbegin', div);

    const eraseButtons = document.querySelectorAll('.btn_delete');
    eraseButtons.forEach(btn => {
        btn.removeEventListener('click', { capture: false});
        btn.addEventListener('click', this.removeTask)  ;
        })
    }    

    removeTask(event){
        let target = event.currentTarget;
        target.parentNode.remove();
     }     
}    

export const taskList = new TaskList();
 
 

