
function alertFun(event){
    const show = document.querySelector("#show");
    const target = event.currentTarget;
    console.log(`Hiciste Click y este es tu numero ${target.value}`);
    console.log(show.value += target.value);

}    

function start() {
    const numbers = document.querySelectorAll(".num");
    numbers.forEach(item => {
        item.addEventListener('click', alertFun)
    });
}

document.addEventListener('DOMContentLoaded', start);

