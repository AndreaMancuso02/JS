// class Viaggio{
//     constructor() {
//         this.destinazione = document.querySelector("#destinazione").value;
//         this.prezzo = document.querySelector("#prezzo").value;
//         this.disponibilita = document.querySelector("#switchCheckDefault").checked;
//     }
// }

let mioForm = document.querySelector("#mioForm");

let id;
let destinazione;
let prezzo;
let disponibilita;

mioForm.addEventListener("submit", function(event) {
    event.preventDefault();
    destinazione = document.querySelector("#destinazione").value;
    prezzo = document.querySelector("#prezzo").value;
    disponibilita = document.querySelector("#switchCheckDefault").checked;
    // Qui il valore sarà quello inserito dall'utente
    console.log(destinazione);
    console.log(prezzo);
    console.log(disponibilita);
});

function setViaggio() {
    const URL = "http://localhost:3000/viaggi";
    try {
        fetch(URL)
        .then(data => {
            //inserire regole per controllare
            return data.json();
        })
        .then(response => {
            //response è un array da 10 oggetti
            console.log(response);
            inserisciViaggio(response[response.length ]);
            inserisciViaggio(response[response.length + 1]);
            inserisciViaggio(response[response.length - 1]);
            id = response.length;
        })
    } catch (error) {
        console.log("Errore nella fetch: ", error);
    }
}



/**
 * 
 * @param {Viaggio} viaggio 
 */
function inserisciViaggio(viaggio) {
    const URL = "http://localhost:3000/viaggi";

    let nuovoViaggio = {
        id: viaggio.id + 1,
        destinazione: viaggio.destinazione,
        prezzo: viaggio.prezzo,
        disponibilita: viaggio.disponibilita,
    }

    fetch(URL, {
        // method: "POST",
        // headers: {
        //     "Content-Type": "application/json"
        // },
        // //dentro il body passo l'oggetto formato json che voglio registrare
        // body: JSON.stringify(nuovoViaggio)
    })
    .then(response => {
        fetch(URL)
        .then(data => data.json())
        .then(response => {
            console.log(response.length);
        })
        console.log(nuovoViaggio);
        
        if (response.ok) {
            console.log("Viaggio inserito con successo");
            // Potresti voler reindirizzare o aggiornare la pagina qui
            location.reload();
        } else {
            console.error("Errore nell'inserimento del viaggio", response.statusText);
        }
    })
    .catch(error => {
        console.log("Errore nella fetch: ", error);
    });
    
}





document.addEventListener("DOMContentLoaded", setViaggio);