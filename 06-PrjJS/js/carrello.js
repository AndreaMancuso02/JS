let lista = document.querySelector("#lista");

function getCarrello() {
    const URL = "http://localhost:3000/carrello";
    fetch(URL)
    .then(data => {
        return data.json()
    })
    .then(response => {
        console.log(response);
        response.forEach(viaggio => {
            lista.appendChild(creaLista(viaggio));
        });
    })
}

document.addEventListener("DOMContentLoaded", getCarrello);

function creaLista(viaggio) {
    // <li class="list-group-item d-flex align-items-center">An item
    //     <span class="ms-auto">
    //         <i class="bi bi-trash" style="color: red;"></i>
    //     </span>
    // </li>
    let listItem = document.createElement("li");
    listItem.setAttribute("class", "list-group-item d-flex align-items-center")
    listItem.textContent = `${viaggio.destinazione} - ${viaggio.prezzo}`;
    
    let span = document.createElement("span");
    span.setAttribute("class", "ms-auto");

    let i = document.createElement("i");
    i.setAttribute("class", "bi bi-trash text-danger");

    i.addEventListener("click", function(){
        console.log("Elimina viaggio");
        eliminaViaggio(viaggio.id);
    })

    span.appendChild(i);
    listItem.appendChild(span);

    return listItem;
}

function eliminaViaggio(id){
    const URL = `http://localhost:3000/carrello/${id}`;
    fetch(URL, {
        method: "DELETE"
    })
    .then(data => {
        console.log("Viaggio eliminato", data);
        location.reload();
    })
}