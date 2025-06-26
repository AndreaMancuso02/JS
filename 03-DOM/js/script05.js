class Studente{
    constructor(nome, cognome, corso){
        this.nome = nome;
        this.cognome = cognome;
        this.corso = corso;
    }
    studia(){
        console.log("Sto studiando...");
        
    }
}

let studente = new Studente("Laura", "Verdi", "Sviluppo App");

studente.studia();

// Trasformo in un JSON e salvo in local o session storage
//ATT: non ci sono i metodi perchè è inutile passarli alla tecnologia successiva
//                   key:string         value:string
localStorage.setItem("studente", JSON.stringify(studente));

//recupero lo studente dalla localstorage
let studenteConnesso =JSON.parse(localStorage.getItem("studente")); //ATT: sto recuperando una string
console.log(studenteConnesso);

let demo = document.querySelector("#demo");
demo.innerHTML = `<h3> Ciao ${studente.nome} ${studente.cognome} </h3>`



