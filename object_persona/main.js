//quiero que crees un objeto personas. que tenga una propiedad de tipo de arreglo item. y los 
//metodos add, showTotal y showNames.
//el metodo add debe agregar una persona nueva en item cada vez que lo llames y no debes permitir
//que se repitar un valor

//el metodo showTotal debe imprimir en consola el siguiente mensaje: 'existen x personas
//registradas' donde x seria el numero item registrados.
//el metodo showNames debe mostrar los nombres registrados en la propiedad items separados por
// coma en un console.log.   


function Personas(people){
    this.item = []

    this.add = function(newPeople){
        this.item.push(newPeople)
    };

    this.showTotal = function(){
        let ejecution = 0;
        for(let i=0; i<this.item.length; i++){
            ejecution++;
        }
        const total = ejecution;
        console.log("existen", total, "personas registradas")
        return total            
    };

    this.showNames = function(){
       console.log(this.item.join());
    }; 
}

let list = new Personas("John");
list.add("John");
list.add("Lasso");
list.add("Fred");
list.showTotal();
console.log(list.showNames());







