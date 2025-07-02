let materieAttive = document.querySelector("#materieAttive");
function getDatiMaterie(){
    const url = "http://localhost:3000/materie";
    fetch(url)
    .then(data => {return data.json()})
    .then(response => {
        response.forEach(materia => {
            materieAttive.appendChild(creaCard(materia));
        });
    })
}

function creaCard(materia){

    let card = document.createElement("div");
    card.setAttribute("class", "card col-3 m-3");

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    let h4 = document.createElement("h4");
    h4.setAttribute("class", "card-title");
    h4.textContent = materia.author;

    let p = document.createElement("p");
    p.setAttribute("class", "class-text");
    p.textContent = materia.title;

    let btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary");
    btn.textContent = "Scegli corso";

    btn.addEventListener("click", function(){
        console.log(`Stai scegliendo il corso di ${materia.title}`);
    })

    cardBody.appendChild(h4);
    cardBody.appendChild(p);
    cardBody.appendChild(btn);

    card.appendChild(cardBody);

    return card;
}

document.addEventListener("DOMContentLoaded", getDatiMaterie);