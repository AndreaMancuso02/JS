//Leggo gli attributi di un elemento
let li4 = document.querySelector("#quattro");

console.log(li4.getAttribute("id")); // quattro
console.log(li4.getAttribute("class")); //txtRed

//voglio capire se l'elemento possiede un attributo
console.log(li4.hasAttribute("href")); //false

let link = document.querySelector("#link").getAttribute("href");
console.log(link);


//setAttribute, imposta, specifica gli attributi di un elemento
let li6 = document.querySelector("#sei");

//nodo.setAttribute("nomeAttr", "valore");
li6.setAttribute("class", "txtRed");

let lisAlbum = document.querySelectorAll("#listaAlbum li");

lisAlbum.forEach(li =>{
    //li.setAttribute("class", "txtRed"); //ATT: con questa riga tolgo le classi precedenti

    //volendo solo aggiungere uso un altro metodo 
    li.classList.add("txtRed");
    //rimuovo il grassetto 
    li.classList.remove("txtAlb");
})

lisAlbum.forEach(li=>{
    li.addEventListener("click", function(){
        li.classList.toggle("txtAlb");
    })
})
