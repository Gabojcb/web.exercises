

// Funcion que muestra en en la pantalla de la calculadora los botones que oprimes
function showFun (event) {
    const showNumbers = document.querySelector("#show_Number");
    const buttonNum = event.currentTarget;
    // La varaable operationSing selecciona a todos los botones con un signo de operacion
    const operationSign = document.querySelectorAll('.operator');
    operationSign.forEach(e => {
        const resta = new Calculador();
        resta.operacion1(buttonNum, e.value, buttonNum);
        console.log(e.value);
    })
    console.log(showNumbers.value += buttonNum.value); 
}       

function start() {
    const buttonNumbers = document.querySelectorAll(".button_number");
    buttonNumbers.forEach(item => {
        item.addEventListener('click', showFun);
    })    
 }
 
 function Calculador() {
           let preRecord = [];
            characters ={
                add: "+",
                subtract: "-",
                multiplication: "*",
                division: "/"
        };
            // means ={
            //     currentValue: a,
            //     stored: b,
            //     operation: c 
            // }
                        
        this.operacion1 = function (num1, operation, num2){
            let data1;                                  
            let saveResult;
            
            switch(operation){
                case "+":
                    saveResult = num1 + num2;
                    data1 =`${operation} : ${num1} ${characters.add} ${num2} = ${saveResult}`;
                    break;
                case "-":
                    saveResult = num1 - num2;
                    data1 =`${operation} : ${num1} ${characters.subtract} ${num2} = ${saveResult}`;
                    break;
                case "x":
                    saveResult = num1 * num2;
                    data1 =`${operation} : ${num1} ${characters.multiplication} ${num2} = ${saveResult}`;
                    break;
                case "/":
                    saveResult = num1 / num2;
                    data1 =`${operation} : ${num1} ${characters.division} ${num2} = ${saveResult}`;
                    break;
                default:
                    console.log("no se conoce ningun otra operacion");
            };
                      
            preRecord.push(data1); 
        return saveResult;  
        };
                       
        this.operacion2 = function(operation, num1, num2){
            let data2;
            let weResult;
             
            if (operation === "Suma"){
                weResult = num1 + num2;
                data2 =`${operation} : ${num1} ${characters.add} ${num2} = ${weResult}`;
            } else if (operation === "Resta"){
                weResult = num1 - num2;
                data2 =`${operation} : ${num1} ${characters.subtract} ${num2} = ${weResult}`; 
            } else if (operation === "Multiplicacion"){
                weResult = num1 * num2;
                data2 =`${operation} : ${num1} ${characters.multiplication} ${num2} = ${weResult}`;
            } else if (operation === "Division"){
                weResult = num1 / num2;
                data2 =`${operation} : ${num1} ${characters.division} ${num2} = ${weResult}`;
            }else{
                console.log("no se conoce ningun otra operacion");
            };
                       
            preRecord.push(data2);
            return weResult;                                       
        };
        
        this.historico = function(){
            let record = [];
            record.push(preRecord);
            return record;
        }
                 
    }
          
    document.addEventListener('DOMContentLoaded', start); 

function calcular() {
    console.log('Funciono esta funcion');
}
        