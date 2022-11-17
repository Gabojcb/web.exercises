
const movies = [{
    film: "Adventure/Drama.",
    name: "In the heart of the Sea.",
    description: "It is base on a non-fiction book titled in the Heart of the Sea: the Essex Whaling Ship Tragedy, write by author Nathaniel Philbrick.",
    image: "hero/movie.jpg",
    actors: ["Chris Hemsworth", "Cilian Murphy", "Tom Holland", "Benjamin Walker", "Brendan Gleeson."]  
},{
    film: "Comedy/Drama.",
    name: "fashion clerk.",
    description: "Ben Whittaker, a 70-year-old widower, revolutionizes an online business dedicated to the world of fashion when he starts working as an intern there, becoming indispensable and much loved by his colleagues.",
    image: "hero/movie3.jpg",
    actors: ["Robert De Niro", "Anne Hathaway", "Rene Russo", "Adam Devine", "Christina Scherer"]
},{
    film: "Action/Adventure.",
    name: "The agent of C.I.P.O.L.",
    description: "In the early 1960, CIA agent Napoleon Solo and KGB officer lllya Kuryakin participate in a join misiion against a mysterious criminal organization that is trying to create nuclear weapons.",
    image: "hero/movie2.jpg",
    actors: ["Armie Hammer", "Henry Cavill", "Alicia Vikander", "Elizabeth Debicki", "Hugh Grant"]
},{
    film: "Action/Suspenso.",
    name: "Mission Impossible:Fallout.",
    description: "An arms dealer and a group of terrorists intend to carry out a triple nuclear attack with three plutonium artifacts, which. Ethan Hunt and his team will have to get them back before they fall into the wrong hands.",
    image: "hero/movie5.jpg",
    actors: ["Tom Cruise", "Rebecca Ferguson", "Simon Pegg", "Henry Cavill", "Ving Rhames", "Vanessa Kirby"]
},{
    film: "Adventure/Action.",
    name: "Uncharted: Off the Map.",
    description: "Treasure hunter Victor Sullivan recruits Nathan Drake to help him recover a 500-year-old fortune. What begins as a heist turns ruthless Santiago Moncada.",
    image: "hero/movie6.jpg", 
    actors: ["Tom Holland", "Sophia Ali", "Mark Wahlberg", "Tati Gabrielle", "Antonio Banderas"]
},{
    film: "Comedy/Drama.",
    name: "Instant Family.",
    description: "Instant Family is a dramatic comedy by Sean Anders and starring Mark Wahlberg and Rose Byrne.",
    image: "hero/movie4.jpg",
    actors: ["Mark Wahlberg", "Rose Byrne", "Isabela Moner", "Octavia Spencer"]
}]

const ul = document.createElement('ul');
ul.id='ul_list';

document.body.appendChild(ul);

    let li = [];
    for(let i=0; i<movies.length; i++){
        let template = `<li class="list"> <span class="text_li"><span class="color">film:</span>${movies[i].film} <span class="color">name:</span> ${movies[i].name} <span class="color">description:</span> ${movies[i].description} <span class="color">actors:</span> ${movies[i].actors}</span><img class="img" src="${movies[i].image}" alt=""></li>`
        if(i <movies.length){
           li.push(template);
        };
    };
    li.forEach(l => {
       
    })  

ul.insertAdjacentHTML('afterbegin', li);

const img = document.querySelectorAll('.img');
const spanShow = document.querySelectorAll('.text_li');
img.forEach(i=>{
    spanShow.forEach(s=>{
        if(s.style.visibility="hidden"){
            i.addEventListener('mousemove', ()=>{
                s.style.visibility="visible";
                console.log('Pasaste el mouse sobre mi');
            })
        }else if(s.style.visibility="visible"){
            i.addEventListener('mouseout', ()=>{
                s.style.visibility="hidden";
                console.log('Quitaste el mouse de mi'); 
            })
        }
    })
})


const footer = document.createElement('footer');
footer.id="footer";
document.body.appendChild(footer);

const p = document.createElement('p');
p.className="mensaje";
p.innerHTML='Todos los derechos reservador al Traineer';

footer.appendChild(p);


// else if (i.addEventListener('mouseout')){
//     i.addEventListener('mouseout', ()=>{
//         spanShow.forEach(s=>{
//             s.style.visibility="hidden";
//         })
//     })
// }

/*img.forEach(i=>{
    i.addEventListener('mousemove', ()=>{
       spanShow.forEach(s=>{
           s.style.visibility="visible";
           console.log('Pasaste el mouse arriba de mi');
       })
    })
})*/