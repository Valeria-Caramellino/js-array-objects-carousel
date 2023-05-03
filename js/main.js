console.log("ciao");
//creo elementi da mettere in pagina e dove
let container = document.createElement("div");
container.id = "container";
document.body.append(container);

let box = document.createElement("div");
box.id = "box";
//box.className="visibile";
container.append(box);

//creazione bottoni
let buttonGo = document.createElement ("button");
buttonGo.type = buttonGo;
buttonGo.innerHTML = '▲';
buttonGo.className = "btnAvanti btnStyle";
box.append(buttonGo);

let buttonBeck = document.createElement ("button");
buttonBeck.type = buttonBeck;
buttonBeck.innerText = '▼';
buttonBeck.className = "btnIndietro btnStyle";
box.append(buttonBeck);

///array carosello
const images = [
    {
        image: '01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: '02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: '03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: '04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: '05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//avvio un contatore quanto la lunghezza dell array
for(let i=0; i<images.length; i++){
    //prendo tutti i.valore che mi serve controllare
    console.log(images[i].image, images[i].title, images[i].text);
    //inserisco html e contenuto nel box creando sotto elementi 
    box.innerHTML += `<div id="minibox"><h2>${images[i].title}</h2><p>${images[i].text}</p><img src="img/${images[i].image}" alt="img"></div>`;
    if ( i === 0 ){
        minibox.classList.add("visibile");
    }
    box.append(minibox);
}

//raggruppo le card 
const imgContainer = document.querySelectorAll("#minibox");
let inizioCard = 0;

//bottone avanti
buttonGo.addEventListener("click", function(){
    imgContainer[inizioCard].classList.remove("visibile");
    inizioCard++;
    if ( inizioCard == imgContainer.length ){
        inizioCard= 0;
    }
    imgContainer[inizioCard].classList.add("visibile");
});

//bottone indietro
buttonBeck.addEventListener("click", function(){
    imgContainer[inizioCard].classList.remove("visibile");
    inizioCard--;
    if ( inizioCard < 0 ){
        inizioCard= imgContainer.length -1;
    }
    imgContainer[inizioCard].classList.add("visibile");
});
