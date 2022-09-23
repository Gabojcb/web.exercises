




function fillArray(total = 100, otroTotal =10 ){
    const num = [];
    for (let i = 0; i<total+otroTotal; i++){
        const result = (i * 3);
        num.push(result);
    }
    return num;
};    
const obtenerDatos = newResult.filter(filtro => filtro > 200 & filtro<300);

console.log(obtenerDatos);
var newResult = fillArray();
const newResult2 = fillArray(50, 60);
console.log(newResult);
console.log(newResult2);
