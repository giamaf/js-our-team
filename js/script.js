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
    console.log(currentPerson);
    console.log('nome: ', currentPerson.name);
    console.log('ruolo:', currentPerson.role);
    console.log('foto: ', currentPerson.photo);


}
