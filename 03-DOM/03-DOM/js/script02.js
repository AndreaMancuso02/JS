//Idea: aggiungere o rimuovere un elemento HTML


//Aggiungo un album
let listaAlbum = document.querySelector("#listaAlbum"); //PARENT NODE

let li = document.createElement("li"); //CHILD NODE
li.textContent = "Pokerface - Lady Gaga"; //<li>Pokerface - Lady Gaga</li>

listaAlbum.appendChild(li);

//Elimino un elemento dalla lista della spesa
let listaSpesa = document.querySelector("#lista"); //PARENT NODE

let childDaEliminare = document.querySelector("#tre"); //CHILD NODE

//NodoParent.metodo(NodoChild)
listaSpesa.removeChild(childDaEliminare);
