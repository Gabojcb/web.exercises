


function showFun (event) {
    const showNumbers = document.querySelector("#showNumber");
    const operators = document.querySelectorAll('.operator');
    const buttonNum = event.currentTarget;
       
    operators.forEach(operation => {
        operation.addEventListener('click', (event) => {
        const targetValue = event.currentTarget.value;
       
        });
    });
    console.log(showNumbers.value += target.value); 
    
    calculador.operacion1("Suma", 33, 12);            
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
            means ={
                currentValue: a,
                stored: b,
                operation: c 
            }
                        
        this.operacion1 = function (operation, num1, num2){
            let data1;                                  
            let saveResult;
            
            switch(operation){
                case "Suma":
                    saveResult = num1 + num2;
                    data1 =`${operation} : ${num1} ${characters.add} ${num2} = ${saveResult}`;
                    break;
                case "Resta":
                    saveResult = num1 - num2;
                    data1 =`${operation} : ${num1} ${characters.subtract} ${num2} = ${saveResult}`;
                    break;
                case "Multiplicar":
                    saveResult = num1 * num2;
                    data1 =`${operation} : ${num1} ${characters.multiplication} ${num2} = ${saveResult}`;
                    break;
                case "Division":
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
        