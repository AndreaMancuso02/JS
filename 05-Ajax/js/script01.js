//chiamo un endpoint di una API esterna

let urlEndpoint = "https://pokeapi.co/api/v2/pokemon/bulbasaur/";

let nomePokemon = "";

//fetch che esegue una chiamata esterna
fetch(urlEndpoint)
//in questo primo then gestisco la chiamata al server e la sua risposta
.then(data => {
    return data.json(); //la prima then mi restituisce una promise
})
.then(Response =>{
    // console.log(Response.name);
    nomePokemon = Response.name;
    console.log("Nome del pokemon ", nomePokemon);
    
})


