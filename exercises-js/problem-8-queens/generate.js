import { eventClick } from "./solutionsCases.js";
const btnInit = document.querySelector(".btn-init"); 

export function generate(arr) {
    const divContainer = document.querySelector("#container");
    for (let i = 0; i < arr.length; i++) {
        const boxPosition = `${arr[i]}`;
        const indice = `${i}`;
        let template = `<div class="box ${boxPosition}" id="${indice}"></div>`;
        divContainer.insertAdjacentHTML("beforeend", template);
        }
        
     addLettersBoard();
     const box = document.querySelectorAll(".box");
    }

    function addLettersBoard() {
        
            const positionA8 = `<p class="num green">8</p6>`;
            const positionA7 = `<p class="num white">7</p6>`;
            const positionA6 = `<p class="num green">6</p6>`;
            const positionA5 = `<p class="num white">5</p6>`;
            const positionA4 = `<p class="num green">4</p6>`;
            const positionA3 = `<p class="num white">3</p6>`;
            const positionA2 = `<p class="num green">2</p6>`;
            const positionA1andA = `<p class="num white">1</p6> <p class="lyric white">a</p>`;
            const positionB = `<p class="lyric green">b</p6>`;
            const positionC = `<p class="lyric white">c</p6>`;
            const positionD = `<p class="lyric green">d</p6>`;
            const positionE = `<p class="lyric white">e</p6>`;
            const positionF = `<p class="lyric green">f</p6>`;
            const positionG = `<p class="lyric white">g</p6>`;
            const positionH = `<p class="lyric green">h</p6>`;
    
            const a8 = document.querySelector(".a8");
            const a7 = document.querySelector(".a7");
            const a6 = document.querySelector(".a6");
            const a5 = document.querySelector(".a5");
            const a4 = document.querySelector(".a4");
            const a3 = document.querySelector(".a3");
            const a2 = document.querySelector(".a2");
            const a1 = document.querySelector(".a1");

            a8.insertAdjacentHTML("beforeend", positionA8);
            a7.insertAdjacentHTML("beforeend", positionA7);
            a6.insertAdjacentHTML("beforeend", positionA6);
            a5.insertAdjacentHTML("beforeend", positionA5);
            a4.insertAdjacentHTML("beforeend", positionA4);
            a3.insertAdjacentHTML("beforeend", positionA3);
            a2.insertAdjacentHTML("beforeend", positionA2);
            a1.insertAdjacentHTML("beforeend", positionA1andA);
    
            const b1 = document.querySelector(".b1");
            const c1 = document.querySelector(".c1");
            const d1 = document.querySelector(".d1");
            const e1 = document.querySelector(".e1");
            const f1 = document.querySelector(".f1");
            const g1 = document.querySelector(".g1");
            const h1 = document.querySelector(".h1");
    
            b1.insertAdjacentHTML("beforeend", positionB);
            c1.insertAdjacentHTML("beforeend", positionC);
            d1.insertAdjacentHTML("beforeend", positionD);
            e1.insertAdjacentHTML("beforeend", positionE);
            f1.insertAdjacentHTML("beforeend", positionF);
            g1.insertAdjacentHTML("beforeend", positionG);
            h1.insertAdjacentHTML("beforeend", positionH);

            eventClick(btnInit);
    }


