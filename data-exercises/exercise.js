const people = [{
    nombre: "Juan",
    apellido: "Mcguire",
    sexo: "M",
    edad: 30,
    ciudad: "Caracas"
},{
    nombre: "Abraham",
    apellido: "Lincoln",
    sexo: "M",
    edad: 134,
    ciudad: "California" 
},{
    nombre: "Thomas",
    apellido: "Jefferson",
    sexo: "M",
    edad: 82,
    ciudad: "Caracas"
},{
    nombre: "John",
    apellido: "Kennedy",
    sexo: "M",
    edad: 56,
    ciudad: "Valencia"
},{
    nombre: "Dwayne",
    apellido: "Jonhson",
    sexo: "M",
    edad: 50,
    ciudad: "California"
},{
    nombre: "Karen",
    apellido: "Kennedy",
    sexo: "F",
    edad: 34,
    ciudad: "Valencia"
},{
    nombre: "Gal",
    apellido: "Gadot",
    sexo: "F",
    edad: 37,
    ciudad: "California"
},{
    nombre: "Juan",
    apellido: "Hernandez",
    sexo: "M",
    edad: 30,
    ciudad: "Caracas"
},{
    nombre: "Drake",
    apellido: "Graham",
    sexo: "M",
    edad: 35,
    ciudad: "California"
},{
    nombre: "The weeknd",
    apellido: "Makkonen",
    sexo: "M",
    edad: 32,
    ciudad: "Valencia"
},{
    nombre: "Harry",
    apellido: "Mcguire",
    sexo: "M",
    edad: 57,
    ciudad: "Caracas"
},{
    nombre: "Harry",
    apellido: "Style",
    sexo: "M",
    edad: 67,
    ciudad: "California"
},{
    nombre: "Dua",
    apellido: "Lipa",
    sexo: "F",
    edad: 28,
    ciudad: "Caracas"
},{
    nombre: "Jaime",
    apellido: "Jefferson",
    sexo: "M",
    edad: 81,
    ciudad: "Valencia"
},{
    nombre: "Selina",
    apellido: "Lincoln",
    sexo: "F",
    edad: 62,
    ciudad: "Caracas"
}];

 const oldAge = people.filter(personitas => personitas.edad >= 50);
 const minors = people.filter(menores => menores.edad <= 50);
 const alphaMales = people.filter(machitos => machitos.sexo === "M");
 const women = people.filter(chicas => chicas.sexo === "F");

 const personasConA = personas.filter(gente => gente.apellido.includes("a"));

  function quantity(list, location){
    totalCity = 0;
    for (let i=0; i<list.length; i++){
        if (list[i].ciudad === location){
            totalCity++;
        }
    };
    const saveCity = totalCity; 
    console.log("En nuestro arreglo el total de personas que viven en", location, "es de:", saveCity);
        return saveCity;
}

console.log("En el arreglo estas personas tienen la letra 'a' en su apellido: ",personasConA);
console.log(quantity(people, "Caracas"));



