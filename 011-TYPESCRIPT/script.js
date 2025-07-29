// TS è tipizzato, ho i tipi ma non ho l'obbligo di specificarli
var nome = "Dario";
var cognome = "Mennillo";
var eta;
eta = 36;
var interruttore = true;
var sportPref = ["volley", "calcio", "nuoto", "basket"];
sportPref.forEach(function (sport) {
    console.log(sport);
});
//posso creare un oggetto il cui tipo viene costruito al volo. si chiama object type definition
// ATT: la classe comunque esiste ed è utilizzatissima
var studente;
studente = {
    nome: "Anna",
    cognome: "Rossi",
    email: "arossi@email.com",
    eta: 30,
    presenza: true
};
console.log(studente);
function saluta(persona) {
    console.log("Ciao ".concat(persona.nome, " ").concat(persona.cognome));
}
// nel terminale scirvere: tsc .\script.ts e verrrà creato il js
//esistono le classi
var Docente = /** @class */ (function () {
    function Docente(nome, cognome, eta, corsi) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.corsi = corsi;
    }
    //metodo
    Docente.prototype.insegna = function (nomeCorso) {
        this.corsi.push(nomeCorso);
    };
    Docente.prototype.getCorsi = function () {
        return this.corsi;
    };
    Docente.prototype.saluta = function () {
        return "Ciao, io sono ".concat(this.nome, " ").concat(this.cognome);
    };
    return Docente;
}());
var doc = new Docente("Oscar", "Vecchione", 45, ["html", "CSS", "Db"]);
doc.insegna("Javascript");
console.log(doc.getCorsi());
console.log(doc.saluta());
//Esiste anche un altro modo di dichiarare la classe. Praticamente non dichiaro le prop di classe ma dichiaro direttamente tutto nel costruttore
var Utente = /** @class */ (function () {
    //posso evitare di specificare le prop di una classe ma nel costruttore devo utilizzare i modificatori d'accesso
    function Utente(nome, cognome, matricola) {
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
    }
    Utente.prototype.estraiMatricola = function () {
        return this.matricola;
    };
    return Utente;
}());
var user = new Utente("Laura", "Verdi", 5);
console.log(user.estraiMatricola());
var Tizio = /** @class */ (function () {
    function Tizio() {
    }
    //anche saluta è obbligatorio
    Tizio.prototype.saluta = function () {
        return this.nome;
    };
    return Tizio;
}());
