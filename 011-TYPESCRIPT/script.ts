// TS è tipizzato, ho i tipi ma non ho l'obbligo di specificarli
let nome = "Dario";

let cognome: string = "Mennillo";

let eta: number;
eta = 36;

let interruttore: boolean = true;

let sportPref: string[] = ["volley", "calcio", "nuoto", "basket"];

sportPref.forEach(sport=>{
    console.log(sport);
    
})
//posso creare un oggetto il cui tipo viene costruito al volo. si chiama object type definition
// ATT: la classe comunque esiste ed è utilizzatissima
let studente: {
    nome: string,
    cognome: string,
    email: string,
    eta: number,
    presenza: boolean
}

studente = {
    nome: "Anna",
    cognome: "Rossi",
    email: "arossi@email.com",
    eta: 30,
    presenza: true
}

console.log(studente);

type Persona = {
    nome: string,
    cognome: string
}

function saluta(persona: Persona){
    console.log(`Ciao ${persona.nome} ${persona.cognome}`);
}

// nel terminale scirvere: tsc .\script.ts e verrrà creato il js

//esistono le classi

class Docente{
    nome: string;
    cognome: string;
    eta: number;
    private corsi: string[]

    constructor(nome: string, cognome: string, eta: number, corsi: string[]){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.corsi = corsi;
    }

    //metodo
    insegna(nomeCorso: string){
        this.corsi.push(nomeCorso)
    }

    getCorsi(){
        return this.corsi;
    }

    saluta(): string{
        return `Ciao, io sono ${this.nome} ${this.cognome}`;
    }
}

let doc = new Docente("Oscar", "Vecchione", 45, ["html", "CSS", "Db"]);
doc.insegna("Javascript");
console.log(doc.getCorsi());
console.log(doc.saluta());


//Esiste anche un altro modo di dichiarare la classe. Praticamente non dichiaro le prop di classe ma dichiaro direttamente tutto nel costruttore
class Utente{
    //posso evitare di specificare le prop di una classe ma nel costruttore devo utilizzare i modificatori d'accesso
    constructor(public nome: string, public cognome: string, private matricola: number){
    }

    estraiMatricola(): number{
        return this.matricola
    } 
}

let user = new Utente("Laura", "Verdi", 5);
console.log(
    user.estraiMatricola()
);

interface Umano{
    nome: string,
    cognome: string,

    saluta:() => String
}

class Tizio implements Umano{
    // nome e cognome sono obbligatorie poiche arrivano dall interfaccia
    nome: string;
    cognome: string;
    eta: number

    //anche saluta è obbligatorio
    saluta(): String {
        return this.nome;
    }
}


