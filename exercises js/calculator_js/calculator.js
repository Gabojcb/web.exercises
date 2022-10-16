    

    function Calculador(){
        
        this.operacion1 = function (operation, num1, num2){
            let saveResult;
            switch(operation){
                case "Suma":
                    saveResult = num1 + num2
                    break;
                case "Resta":
                    saveResult = num1 - num2
                    break;
                case "Multiplicar":
                    saveResult = num1 * num2
                    break;
                case "Division":
                    saveResult = num1 / num2
                    break;
                default:
                    console.log("no se conoce ningun otra operacion");
            };
        return saveResult;  
        };
        
        
        
            this.operacion2 = function(operation, num1, num2){
            if (operation === "suma"){
                return num1 + num2
            } else if (operation === "Resta"){
                return num1 - num2
            } else if (operation === "Multiplicacion"){
                return num1 * num2
            } else if (operation === "Division"){
                return num1 / num2 
            };
        };

        
        this.historico = function(operacion, resultado){
            let devolver = {
                accion: operacion,
                retorno: resultado 
            };
            return devolver;
        };
    }

    const calculador = new Calculador;
        