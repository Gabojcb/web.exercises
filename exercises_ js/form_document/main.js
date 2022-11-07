
function validate(){
    regex={
        nameR: /^[a-zA-Z]+[a-zA-Z]+$/,
        lastNameR: /^[a-zA-Z]+[a-zA-Z]+$/,
        ageR: /^(?:[0-9]?|1[01][0-9]|120)/,
        emailR: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        dataR: /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/
    }

    let stored = [];

    function Users(name, lastName, age, email, birth){
        this.name = name,
        this.last = lastName,
        this.age = age,
        this.email = email,
        this.birth = birth 
    }

    //Constantes de los parrafos 
    const message = document.querySelector('.text--name');
    const message2 = document.querySelector('.text--lastName');
    const message3 = document.querySelector('.text--age');
    const message4 = document.querySelector('.text--email');
    const message5 = document.querySelector('.text--data');
    
    //Constantes de los Input 
    const name = document.querySelector('.name');
    const lastName = document.querySelector('.lastName');
    const age = document.querySelector('.age');
    const email = document.querySelector('.email');
    const data = document.querySelector('.data');
         
    if(! regex.nameR.test(name.value)){
        console.log(message.innerHTML= 'Incorrect data'); 
    }else {
        console.log(`valid name`);
    };

    if(! regex.lastNameR.test(lastName.value)){
        console.log(message2.innerHTML='Incorrect data');  
    }else {
        console.log(`valid surname`);
    };
        
    if(! regex.ageR.test(age.value)){
        console.log(message3.innerHTML='Incorrect data');
    }else {
        console.log(`Valid age`);
    };

    if(! regex.emailR.test(email.value)){
        console.log(message4.innerHTML='Incorrect data');
    }else {
        console.log(`Valid email`);
    };
      
    if(! regex.dataR.match(data.value)){ 
        console.log(message5.innerHTML='Incorrect data');
    }else {
        console.log(data.value);
    };

    const insert = new Users(name.value, lastName.value, age.value, email.value);
    stored.push(insert);
        
    localStorage.setItem('list', JSON.stringify(stored));
    console.log(localStorage.getItem("list"));
}

function start(){
    const send = document.querySelector(".button_send");
    send.addEventListener('click', validate);
}


document.addEventListener('DOMContentLoaded', start);


