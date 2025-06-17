class Torta{
    constructor(nome, prezzo, ingredienti, imgTorta){
        this.nome = nome;
        this.prezzo = prezzo;
        this.ingredienti = ingredienti;
        this.dataScad = new Date();
        this.imgTorta = imgTorta;
    }

    setScadenza(){
        this.dataScad = this.dataScad.getDate() + 5 + "/" + (this.dataScad.getMonth() + 1) + "/" + this.dataScad.getFullYear();
        return this.dataScad;
    }
}

let torteInVendita = [
    new Torta(
        "Tiramisù",
        15.80,
        ["caffè", "mascarpone", "savoiardi", "cioccolato"],
        "./img/tiramisu.jpg"
    ),
    new Torta(
        "Foresta Nera",
        25.50,
        ["farina","uova", "cioccolato fondente"],
        "./img/forestaNera.jpg"
    ),
    new Torta(
        "Cheese cake",
        18.40,
        ["biscotti","formaggio", "marmellata"],
        "./img/cheesecake.jpg"
    )
];

//Adesso stampo le info di ogni singola torta
let vetrinaTorte = document.getElementById("vetrinaTorte");

/**
 * @param {Torta} torta 
 */
function creaCard(torta){
    let ingredienti = "";
    torta.ingredienti.forEach(ingrediente =>{
        ingredienti += "<li>"  + ingrediente + "</li>";
    })

    let card = document.createElement("div");
    card.setAttribute("class", "col-4 mb-5");
    card.innerHTML = `<div class="card">
                        <img class="card-img-top" src='${torta.imgTorta}' alt="Title" />
                        <div class="card-body">
                            <h3 class="card-title">${torta.nome}</h3>
                            <p class="card-text">${ingredienti}</p>
                            <p class="card-text">Scadenza: ${torta.setScadenza()}</p>
                            <button class= 'btn btn-primary'>Compra</button>
                        </div>
                    </div>`
    return card;
    //ATT: ho trasformato la card da string ad oggetto quindi non posso più usare inner.html nella funzione sotto
}

function sfornaTorte(){
    torteInVendita.forEach(torta =>{
        //vetrinaTorte.innerHTML += creaCard(torta);
        vetrinaTorte.appendChild(creaCard(torta));
    })
}

//queeto si puo fare ma non è consigliato
//sfornaTorte();

document.addEventListener("DOMContentLoaded", sfornaTorte);
