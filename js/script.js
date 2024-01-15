//! Consegna
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

//todo MILESTONE 0
// Creare l’array di oggetti con le informazioni fornite.

//todo MILESTONE 1
// Stampare su console le informazioni di nome, ruolo e la stringa della foto

//todo MILESTONE 2
// Stampare le stesse informazioni su DOM sottoforma di stringhe

//todo BONUS 1
// Trasformare la stringa foto in una immagine effettiva

//todo BONUS 2
// Organizzare i singoli membri in card/schede prendendo ad esempio da
// uno dei due layout proposti

//! Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!

//! # DATI
// Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
// Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
// Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
// Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
// Scott Estrada |	Developer            |	scott-estrada-developer.jpg
// Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg

//todo ----------------------------------------------------------------------------------

//todo MILESTONE 0
const teamPeople = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
]

//todo MILESTONE 1
for (let i = 0; i < teamPeople.length; i++) {
    const currentPerson = teamPeople[i];
    // console.log(currentPerson);
    // console.log('nome: ', currentPerson.name);
    // console.log('ruolo:', currentPerson.role);
    // console.log('foto: ', currentPerson.photo);
}

//todo MILESTONE 2
//todo BONUS 1
//todo BONUS 2

// Recupero gli elementi dalla pagina
const titleSection = document.querySelector('.title');
const cardsSection = document.querySelector('.team-members-card');
const row = document.querySelector('.row');

//! Creo gli elementi da inserire nel DOM

// Titolo e sottotitolo
let title = '';
let subTitle = '';

// Creo il contenuto degli elementi title e subtitle
const titleMessage = 'OUR TEAM';
const subTitleMessage = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor debitis quos magnam mollitia necessitatibus. Rerum laudantium odit vel repudiandae corrupti?'

title += `<h5 class="py-2">${titleMessage}</h5>
<p class="h6."><small><small>${subTitleMessage}</small></small></p>`;

// Inserisco gli elementi all'interno della sezione 'Title'
titleSection.innerHTML = title;

// Cards
let col = '';
let card = '';
let cardbody = '';
let teamMember = '';
let role = '';
let photo = '';

// Creo il contenuto delle cards
for (let i = 0; i < teamPeople.length; i++) {
    const currentPerson = teamPeople[i];

    // Creo i contenuti delle cards
    photo = `<img src="/img/${currentPerson['photo']}" class="card-img-top">`;
    role = `<p class="card-text"><small><small>${currentPerson['role']}</small></small></p>`;
    teamMember = `<p class="card-text m-0">${currentPerson['name']}</p>`;
    cardbody = `<div class="card-body">${teamMember}${role}</div>`;
    card = `<div class="card">${photo}${cardbody}</div>`;

    // Creo le cards
    col += `<div class="col-4">${card}</div>`;

}

// Inserisco le cols nella row e stampo in pagina
row.innerHTML = col;



