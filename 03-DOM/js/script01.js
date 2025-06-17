//sintassi css
// # id
// . classe
// nomeTag

//QUERYSELECTOR restituisce sempre e solo 1 elemento, per la precisione la prima occorrenza, cioè il primo che trova

//let lista = document.querySelector("#lista"); //ul inclusi i figli
//console.log(lista);

let li3 = document.querySelector("#tre");
console.log(li3); //<li>Carne</li>
//con la prop textContent posso leggere il testo di un elemento
console.log(li3.textContent);

//uso un selettore tag per recuperare la lista
//ATT: quanto utilizzo il nome tag prendo sempre e solo la prima occorrenza
let lista = document.querySelector("ul");
console.log(lista);

let li1 = document.querySelector("li");
console.log(li1);

//let listaLibri = document.querySelector("#listaLibri");

let listaLibri = document.querySelector("ul.sezLibri");

//VOglio recuperare piu elementi contemporaneamente
//USO QUERY SELECTOR ALL, questo metodo genere una NodeList (parente degli array)

let lis = document.querySelectorAll("#lista li");
console.log(lis);

let console = document.querySelectorAll("#lista li");
console.log(lisSpesa);

let lisLibri = document.querySelectorAll(".sezLibri li");
console.log(lisLibri);

let lisAlbum = document.querySelectorAll("li.txtAlb");
console.log(lisAlbum);
//leggo tutti i titoli degli album in lista
for(let i = 0; i < lisAlbum.length; i++){
    console.log(lisAlbum[i].textContent);
}

[...lisAlbum].forEach(li =>{
    console.log(li.textContent);
})

//metodo alternativo
let libriLis = document.querySelector("#listaLibri").children;
console.log(libriLis);

for(let i = 0; i < libriLis.length; i++){
    console.log(libriLis[i].textContent);
}
//ATT: se quello che ricevo è una collection non posso direttamente applicare il foreach ma devo prima trasformare la collection in un array usando l operatore ... (spread)
[...libriLis].forEach(li =>{
    console.log(li.textContent);
})

let colori = ["bianco", "rosso", "blu", "nero"];
let frutta = ["banana", "mela", "pesca", "anguria", "ciliegia"];

let nuovoArr = [...colori, ...frutta];
console.log(nuovoArr);

