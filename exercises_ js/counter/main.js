

function action(){
    
    const button = document.querySelector('#counter_button');
    button.addEventListener('click', ()=> {
    const counter = document.querySelector('#counter');
       counter.innerHTML ++;
             
    })
}


 document.addEventListener('DOMContentLoaded', action);