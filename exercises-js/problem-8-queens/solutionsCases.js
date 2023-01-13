
export function eventClick(button) {
    button.addEventListener("click", ()=>{
        button.style.visibility ="hidden";

         solutionsWithCases();
    })
};

//FUNCION QUE TRAE LOS EVENTOS DE SOLUCIONES
function solutionsWithCases() {
     
    const marginContainer = document.querySelector(".margin_container");

    let solution1 = `<button class="btn-solution one">Solution1</button>`;
    let solution2 = `<button class="btn-solution two">Solution2</button>`;
    let solution3 = `<button class="btn-solution three">Solution3</button>`;
    let solution4 = `<button class="btn-solution for">Solution4</button>`;
    let solution5 = `<button class="btn-solution five">Solution5</button>`;

     //Boton Reset;
     let reset = `<button class="btn-reset">Reset</button>`;

    marginContainer.insertAdjacentHTML("beforeend", solution1);
    marginContainer.insertAdjacentHTML("beforeend", solution2);
    marginContainer.insertAdjacentHTML("beforeend", solution3);
    marginContainer.insertAdjacentHTML("beforeend", solution4);
    marginContainer.insertAdjacentHTML("beforeend", solution5);
    marginContainer.insertAdjacentHTML("beforeend", reset);

    const btnSolution1 = document.querySelector('.one');
    const btnSolution2 = document.querySelector('.two');
    const btnSolution3 = document.querySelector('.three');
    const btnSolution4 = document.querySelector('.for');
    const btnSolution5 = document.querySelector('.five');

    const buttonReset = document.querySelector(".btn-reset");

//CONSTANTES DE LAS CASILLAS EN DONDE ESTARAN LAS REINAS
        
                const a2 = document.querySelector('.a2');
                const b4 = document.querySelector('.b4');
                const c6 = document.querySelector('.c6');
                const d8 = document.querySelector('.d8');
                const e3 = document.querySelector('.e3');
                const f1 = document.querySelector('.f1');
                const g7 = document.querySelector('.g7');
                const h5 = document.querySelector('.h5');
                const a5 = document.querySelector(".a5");
                const b1 = document.querySelector(".b1");
                const c8 = document.querySelector(".c8");
                const d4 = document.querySelector(".d4");
                const e2 = document.querySelector(".e2");
                const f7 = document.querySelector(".f7");
                const g3 = document.querySelector(".g3");
                const h6 = document.querySelector(".h6");
                const a1 = document.querySelector(".a1");
                const b7 = document.querySelector(".b7");
                const c5 = document.querySelector(".c5");
                const f4 = document.querySelector(".f4");
                const g6 = document.querySelector(".g6");
                const h3 = document.querySelector(".h3");
                const a4 = document.querySelector(".a4");

        btnSolution1.removeEventListener("click", solutionsWithCases)
        btnSolution1.addEventListener("click", ()=> {

                    //Button 1
                    a2.innerHTML += a2.innerHTML="&#9813;";
                    b4.innerHTML += b4.innerHTML="&#9813;";
                    c6.innerHTML += c6.innerHTML="&#9813;";
                    d8.innerHTML += d8.innerHTML="&#9813;";
                    e3.innerHTML += e3.innerHTML="&#9813;";
                    f1.innerHTML += f1.innerHTML="&#9813;";
                    g7.innerHTML += g7.innerHTML="&#9813;";
                    h5.innerHTML += h5.innerHTML="&#9813;";
                    
                    btnSolution1.style.visibility = "hidden";
                    btnSolution2.style.visibility = "hidden";
                    btnSolution3.style.visibility = "hidden";
                    btnSolution4.style.visibility = "hidden";
                    btnSolution5.style.visibility = "hidden";

                    buttonReset.addEventListener("click", ()=> {
                        location.reload();
                    });

                    console.log("Se ejecuto 1");

        })

        btnSolution2.addEventListener("click", ()=> {
    
                    //Button 2
                    a5.innerHTML += a5.innerHTML="&#9813;";
                    b1.innerHTML += b1.innerHTML="&#9813;";
                    c8.innerHTML += c8.innerHTML="&#9813;";
                    d4.innerHTML += d4.innerHTML="&#9813;";
                    e2.innerHTML += e2.innerHTML="&#9813;";
                    f7.innerHTML += f7.innerHTML="&#9813;";
                    g3.innerHTML += g3.innerHTML="&#9813;";
                    h6.innerHTML += h6.innerHTML="&#9813;";

                    btnSolution1.style.visibility = "hidden";
                    btnSolution2.style.visibility = "hidden";
                    btnSolution3.style.visibility = "hidden";
                    btnSolution4.style.visibility = "hidden";
                    btnSolution5.style.visibility = "hidden";

                    buttonReset.addEventListener("click", ()=> {
                        location.reload();
                    });

            console.log("Se ejecuto 2");
        })

        btnSolution3.addEventListener("click", ()=> {

                    //Button 3
                    a1.innerHTML += a1.innerHTML="&#9813;";
                    b7.innerHTML += b7.innerHTML="&#9813;";
                    c5.innerHTML += c5.innerHTML="&#9813;";
                    d8.innerHTML += d8.innerHTML="&#9813;";
                    e2.innerHTML += e2.innerHTML="&#9813;";
                    f4.innerHTML += f4.innerHTML="&#9813;";
                    g6.innerHTML += g6.innerHTML="&#9813;";
                    h3.innerHTML += h3.innerHTML="&#9813;";

                    btnSolution1.style.visibility = "hidden";
                    btnSolution2.style.visibility = "hidden";
                    btnSolution3.style.visibility = "hidden";
                    btnSolution4.style.visibility = "hidden";
                    btnSolution5.style.visibility = "hidden";

                    buttonReset.addEventListener("click", ()=> {
                        location.reload();
                    });
 
            console.log("Se ejecuto 3");
        })

        btnSolution4.addEventListener("click", ()=> {

                    //Button 4
                    a4.innerHTML += a4.innerHTML ="&#9813;";
                    b1.innerHTML += b1.innerHTML ="&#9813;";
                    c5.innerHTML += c5.innerHTML ="&#9813;";
                    d8.innerHTML += d8.innerHTML ="&#9813;";
                    e2.innerHTML += e2.innerHTML ="&#9813;";
                    f7.innerHTML += f7.innerHTML ="&#9813;";
                    g3.innerHTML += g3.innerHTML ="&#9813;";
                    h6.innerHTML += h6.innerHTML ="&#9813;";

                    btnSolution1.style.visibility = "hidden";
                    btnSolution2.style.visibility = "hidden";
                    btnSolution3.style.visibility = "hidden";
                    btnSolution4.style.visibility = "hidden";
                    btnSolution5.style.visibility = "hidden";

                    buttonReset.addEventListener("click", ()=> {
                        location.reload();
                    });

            console.log("Se ejecuto 4");
        })

        btnSolution5.addEventListener("click", ()=> {

                    //Button 5
                    a5.innerHTML += a5.innerHTML="&#9813;";
                    b1.innerHTML += b1.innerHTML="&#9813;";
                    c8.innerHTML += c8.innerHTML="&#9813;";
                    d4.innerHTML += d4.innerHTML="&#9813;";
                    e2.innerHTML += e2.innerHTML="&#9813;";
                    f7.innerHTML += f7.innerHTML="&#9813;";
                    g3.innerHTML += g3.innerHTML="&#9813;";
                    h6.innerHTML += h6.innerHTML="&#9813;";

                    btnSolution1.style.visibility = "hidden";
                    btnSolution2.style.visibility = "hidden";
                    btnSolution3.style.visibility = "hidden";
                    btnSolution4.style.visibility = "hidden";
                    btnSolution5.style.visibility = "hidden";

                    buttonReset.addEventListener("click", ()=> {
                        location.reload();
                    });
    
            console.log("Se ejecuto 5");
        })
                
}    

