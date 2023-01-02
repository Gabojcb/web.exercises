const rowBoxes = document.querySelectorAll('.rows');
const boxColumn = document.querySelectorAll('.columns');
const paintings = document.querySelectorAll('.paintings');
const btnStart = document.querySelector('.btn_init');

//Cero Error de Posicision
const c2 = document.querySelector('.c.dos');
const b1 = document.querySelector('.b.uno');
const c7 = document.querySelector('.c.siete');
const d4 = document.querySelector('.d.cuatro');
const e4 = document.querySelector('.e.cuatro');
const f8 = document.querySelector('.f.ocho');
const g4 = document.querySelector('.g.cuatro');
const h2 = document.querySelector('.h.dos');

//Primero Error de posicion
const b3 = document.querySelector('.b.tres');
const c8 = document.querySelector('.c.ocho');
const g5 = document.querySelector('.g.cinco');
const e6 = document.querySelector('.e.seis');
const e5 = document.querySelector('.e.cinco');
const f2 = document.querySelector('.f.dos');
const f3 = document.querySelector('.f.tres');
const h3 = document.querySelector('.h.tres');

//Segundo Error de posicion
const h6 = document.querySelector('.h.seis');
const b8 = document.querySelector('.b.ocho');
const c4 = document.querySelector('.c.cuatro');
const d2 = document.querySelector('.d.dos');
const e8 = document.querySelector('.e.ocho');
const f5 = document.querySelector('.f.cinco');
const g2 = document.querySelector('.g.dos');
const h8 = document.querySelector('.h.ocho');

//Tercero Error de posicion
const e2 = document.querySelector('.e.dos');
const b5 = document.querySelector('.b.cinco');
const c3 = document.querySelector('.c.tres');
const d3 = document.querySelector('.d.tres');
const d6 = document.querySelector('.d.seis');
const f7 = document.querySelector('.f.siete');
const g8 = document.querySelector('.g.ocho');
const h4 = document.querySelector('.h.cuatro'); 

btnStart.addEventListener('click', randomQueens);

function randomQueens() {

    let numRandom = Math.round(Math.random() * 3);

    btnStart.style.visibility ="hidden";

    let btnSolution = `<button class="btn_solution">Solution</button>`;
    const container = document.querySelector('#container');
    container.insertAdjacentHTML('beforeend', btnSolution);

    const btnClass = document.querySelector('.btn_solution');
    btnClass.removeEventListener('click', randomQueens);
    btnClass.addEventListener('click', solution)

    
    switch(numRandom){
        case 0:
            c2.innerHTML += c2.innerHTML = "&#9813;";
            c2.style.background = "red";
            b3.innerHTML += b3.innerHTML = "&#9813;";
            b3.style.background = "red";
            c7.innerHTML += c7.innerHTML = "&#9813;";
            c7.style.background = "red";
            d4.innerHTML += d4.innerHTML = "&#9813;";
            d4.style.background = "red";
            e4.innerHTML += e4.innerHTML = "&#9813;";
            e4.style.background = "red";
            f8.innerHTML += f8.innerHTML = "&#9813;";
            g4.innerHTML += g4.innerHTML = "&#9813;";
            g4.style.background = "red";
            h2.innerHTML += h2.innerHTML = "&#9813;";
            h2.style.background = "red";
            btnClass.addEventListener('click', case0);
            break;

        case 1:
            b3.innerHTML += b3.innerHTML = "&#9813;";
            b3.style.background = "red";
            c8.innerHTML += c8.innerHTML = "&#9813;";
            c8.style.background = "red";
            g5.innerHTML += g5.innerHTML = "&#9813;";
            g5.style.background = "red";
            e6.innerHTML += e6.innerHTML = "&#9813;";
            e6.style.background = "red";
            e5.innerHTML += e5.innerHTML = "&#9813;";
            e5.style.background = "red";
            f2.innerHTML += f2.innerHTML = "&#9813;";
            f2.style.background = "red";
            f3.innerHTML += f3.innerHTML = "&#9813;";
            f3.style.background = "red";
            h3.innerHTML += h3.innerHTML = "&#9813;";
            h3.style.background = "red";
            btnClass.addEventListener('click', case1);
            break;
            
        case 2:
            h6.innerHTML += h6.innerHTML = "&#9813;";
            h6.style.background = "red";
            b8.innerHTML += b8.innerHTML = "&#9813;";
            b8.style.background = "red";
            c4.innerHTML += c4.innerHTML = "&#9813;";
            c4.style.background = "red";
            d2.innerHTML += d2.innerHTML = "&#9813;";
            d2.style.background = "red";
            e8.innerHTML += e8.innerHTML = "&#9813;";
            e8.style.background = "red";
            f5.innerHTML += f5.innerHTML = "&#9813;";
            g2.innerHTML += g2.innerHTML = "&#9813;";
            g2.style.background = "red";
            h8.innerHTML += h8.innerHTML = "&#9813;";
            h8.style.background = "red";
            btnClass.addEventListener('click', case2);
            break;
            
        case 3:
            e2.innerHTML += e2.innerHTML = "&#9813;";
            e2.style.background = "red";
            b5.innerHTML += b5.innerHTML = "&#9813;";
            b5.style.background = "red";
            c3.innerHTML += c3.innerHTML = "&#9813;";
            c3.style.background = "red";
            d3.innerHTML += d3.innerHTML = "&#9813;";
            d3.style.background = "red";
            d6.innerHTML += d6.innerHTML = "&#9813;";
            d6.style.background = "red";
            f7.innerHTML += f7.innerHTML = "&#9813;";
            f7.style.background = "red";
            g8.innerHTML += g8.innerHTML = "&#9813;";
            g8.style.background = "red";
            h4.innerHTML += h4.innerHTML = "&#9813;";
            btnClass.addEventListener('click', case3);
            break;    
    }
    
    

}    

function solution(event) {
    const a2 = document.querySelector('.a.dos');
    const b4 = document.querySelector('.b.cuatro');
    const c6 = document.querySelector('.c.seis');
    const d8 = document.querySelector('.d.ocho');
    const e3 = document.querySelector('.e.tres');
    const f1 = document.querySelector('.f.uno');
    const g7 = document.querySelector('.g.siete');
    const h5 = document.querySelector('.h.cinco');

    let targetEvent = event.currentTarget;
    
        a2.innerHTML += a2.innerHTML="&#9813;";
        b4.innerHTML += b4.innerHTML="&#9813;";
        c6.innerHTML += c6.innerHTML="&#9813;";
        d8.innerHTML += d8.innerHTML="&#9813;";
        e3.innerHTML += e3.innerHTML="&#9813;";
        f1.innerHTML += f1.innerHTML="&#9813;";
        g7.innerHTML += g7.innerHTML="&#9813;";
        h5.innerHTML += h5.innerHTML="&#9813;";
        
        targetEvent.style.visibility ="hidden";   
}

function case0() {
    c2.innerHTML = c2.innerHTML = "";
    c2.style.background = "#fff";
    b3.innerHTML = b3.innerHTML = "";
    b3.style.background = "#fff";
    c7.innerHTML = "";
    c7.style.background = "forestgreen";
    d4.innerHTML = "";
    d4.style.background = "forestgreen";
    e4.innerHTML = "";
    e4.style.background = "#fff";
    f8.innerHTML = "";
    f8.style.background = "forestgreen";
    g4.innerHTML = "";
    g4.style.background = "#fff";
    h2.innerHTML = "";
    h2.style.background =  "forestgreen";
}

function case1() {
    b3.innerHTML = "";
    b3.style.background = "#fff";
    c8.innerHTML = "";
    c8.style.background = "#fff";
    g5.textContent = "";
    g5.style.background = "forestgreen";
    e6.innerHTML = "";
    e6.style.background = "#fff";
    e5.innerHTML = ""; 
    e5.style.background = "forestgreen";
    f2.innerHTML = "";
    f2.style.background = "forestgreen";
    f3.innerHTML = "";
    f3.style.background = "#fff";
    h3.innerHTML = "";
    h3.style.background = "#fff";
}

function case2() {
            h6.innerHTML = "";
            h6.style.background = "forestgreen";
            b8.innerHTML = "";
            b8.style.background = "forestgreen";
            c4.innerHTML = c4.innerHTML = "";
            c4.style.background = "#fff";
            d2.innerHTML = "";
            d2.style.background = "forestgreen";
            e8.innerHTML = "";
            e8.style.background = "#fff";
            f5.innerHTML = "";
            g2.innerHTML = "";
            g2.style.background = "#fff";
            h8.innerHTML = "";
            h8.style.background = "forestgreen";
};

function case3() {
            e2.innerHTML = "";
            e2.style.background = "#fff";
            b5.innerHTML = "";
            b5.style.background = "#fff";
            c3.innerHTML = "";
            c3.style.background = "forestgreen";
            d3.innerHTML = "";
            d3.style.background = "#fff";
            d6.innerHTML = "";
            d6.style.background = "forestgreen";
            f7.innerHTML = "";
            f7.style.background = "#fff";
            g8.innerHTML = "";
            g8.style.background = "#fff";
            h4.innerHTML = "";
            console.log('se ejecuto case3')
}  