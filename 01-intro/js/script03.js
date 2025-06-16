let listaSpesa = document.getElementById("listaSpesa");

let prodotti = ["Pasta", "Coca-Cola", "Acqua", "Pesto", "Prosciutto Cotto", "Passata di Pomodoro", "Monster", "Carne", "Pizza"];
let prezzi = [0.8, 1.39, 0.3, 3, 1.29, 1, 1.49, 5.20, 3.99];
let quants = [2, 2, 6, 1, 2, 2, 1, 1, 1];

let totaleGenerale = 0;


for (let i = 0; i < prodotti.length; i++) {
    let tr = document.createElement("tr");

    let tdNome = document.createElement("td");
    tdNome.innerHTML = prodotti[i];

    let tdPrezzo = document.createElement("td");
    tdPrezzo.innerHTML = prezzi[i].toFixed(2);

    let tdQuantita = document.createElement("td");
    tdQuantita.innerHTML = quants[i];

    let subTotale = prezzi[i] * quants[i];
    let tdSubTotale = document.createElement("td");
    tdSubTotale.innerHTML = subTotale.toFixed(2);
    
  
    tr.appendChild(tdNome);
    tr.appendChild(tdPrezzo);
    tr.appendChild(tdQuantita);
    tr.appendChild(tdSubTotale);

    listaSpesa.appendChild(tr);
    totaleGenerale += subTotale;
}

document.getElementById("totale").innerHTML = "Totale: " + totaleGenerale.toFixed(2) + " €";
