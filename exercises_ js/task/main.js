
let write = document.querySelector('.toWrite');
let addSend = document.querySelector('.sendTask');
const show = document.querySelector('.show');

addSend.addEventListener('click', addTask);
function addTask(){
    let div = `<div class="showTask">${write.value}<input class="checkbox" type="checkbox"><button class="btn_delete">remove</button></div>`;
    div.innerHTML;
    console.log(`Hiciste click y este estu valor ${div}`);    
    show.insertAdjacentHTML('afterbegin', div)

    const btnRemove = document.querySelectorAll('.btn_delete');
    let boton = document.querySelectorAll('.showTask');
    btnRemove.forEach(btn=>{
        btn.removeEventListener('click', addTask)
        btn.addEventListener('click', ()=>{
            boton.forEach(b=>{
                b.remove();
            })
            console.log('Hiciste click sobre este boton');
        })
    })
}



// btnRemove.addEventListener('click', removeTask); 
//     function removeTask(){
//         btnRemove.forEach(btn=>{
//             console.log('Hiciste click');
//         })
//     } 

   












