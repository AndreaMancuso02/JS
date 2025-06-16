class Torta {
    constructor(nome, prezzo, ingredienti, dataScadenza, imgTorta) {
        this.nome = nome;
        this.prezzo = prezzo;
        this.ingredienti = ingredienti;
        this.dataScadenza = dataScadenza;
        this.imgTorta = imgTorta;
    }
}

// Funzione per creare una card di torta
function creaCardTorta(torta) {
    let colonna = document.createElement('div');
    colonna.classList.add('col');

    let card = document.createElement('div');
    card.classList.add('card');

    let immagine = document.createElement('img');
    immagine.src = torta.imgTorta; //percorso per trovare l'immagine
    immagine.classList.add('card-img-top');
    immagine.alt = `Immagine della ${torta.nome}`; //se non dovesse apparire l'immagine
    immagine.style.height = '200px'; 
    immagine.style.objectFit = 'cover';

    let corpoCard = document.createElement('div');
    corpoCard.classList.add('card-body', 'd-flex', 'flex-column');

    let titolo = document.createElement('h5');
    titolo.classList.add('card-title');
    titolo.textContent = torta.nome;

    let prezzo = document.createElement('p');
    prezzo.classList.add('card-text', 'fw-bold', 'text-primary');
    prezzo.textContent = `€${torta.prezzo.toFixed(2)}`;

    let ingredienti = document.createElement('p');
    ingredienti.classList.add('card-text', 'flex-grow-1');
    ingredienti.textContent = `Ingredienti: ${torta.ingredienti.join(', ')}`; // ho cercato un metodo per separare in modo "piu pulito" l'elenco degli ingredienti

    let scadenza = document.createElement('p');
    scadenza.classList.add('card-text', 'text-muted', 'small');
    scadenza.textContent = `Scadenza: ${torta.dataScadenza.toLocaleDateString()}`;

    corpoCard.appendChild(titolo);
    corpoCard.appendChild(prezzo);
    corpoCard.appendChild(ingredienti);
    corpoCard.appendChild(scadenza);

    card.appendChild(immagine);
    card.appendChild(corpoCard);

    colonna.appendChild(card);

    return colonna;
}

// --- Le Torte da mostrare ---
const miaTorta1 = new Torta(
    "Torta al Cioccolato", 20.50,
    ["farina", "cacao", "zucchero"],
    new Date('2025-06-29'), 'images/cioccolato.jpg'
);

const miaTorta2 = new Torta(
    "Cheesecake Frutti di Bosco", 22.75,
    ["biscotti", "formaggio", "frutti"],
    new Date('2025-06-22'), 'images/cheesecake.jpg'
);

const miaTorta3 = new Torta(
    "Torta di Mele", 19.50,
    ["farina", "mele", "cannella"],
    new Date('2025-06-25'), 'images/mele.jpg'
);

const tutteLeMieTorte = [miaTorta1, miaTorta2, miaTorta3];

document.addEventListener('DOMContentLoaded', () => {
    let contenitore = document.getElementById('cake-container');
    if (!contenitore) {
        console.error('Elemento con ID "cake-container" non trovato!');
        return;
    }

    tutteLeMieTorte.forEach(torta => { 
        let cardPronta = creaCardTorta(torta); 
        contenitore.appendChild(cardPronta); 
    });
});