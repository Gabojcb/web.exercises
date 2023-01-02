
//Array.map 

const prices = [100,200,300,400,500];
const newArray = prices.map( i => i*10);

console.log( newArray );
//Termina ejemplo


//Array.reduce()

const arr = [1,2,3,4,5];
const total = arr.reduce((acc, item) => acc+= item, 0);

console.log(total);
//Termina ejemplo

//Array,find

var cities = ["Caracas", "Buenos aires", "Lima", "Santiago"];
var city = cities.find( i => i.match(/[i]/));

console.log( city );
//termina ejemplo

//Array.filter

var countries = [
    {country : "Argentina", continent: "America"},
    {country : "Venezuela", continet: "America"},

    {country : "España", continent: "Europa"},
    {country : "Rurria", continent: "Asia"},
];

var fromAmerica = cities.filter(item => item.continent === 'America');

console.log( fromAmerica );
//Termina ejemplo