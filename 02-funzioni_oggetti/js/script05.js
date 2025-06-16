//Oggetti con costruttore
class Studente {
    constructor(nome, cognome, eta, corsi, anno, matricola) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.corsi = corsi;
        this.anno = anno;
        this.matricola = matricola;

        this.presentati = function () {
            let presentazione = `Ciao, mi chiamo ${this.nome} ${this.cognome} e sono iscritto ai corsi di: ${this.corsi}.`;

            if (matricola != undefined) {
                presentazione += `Matricola ${this.matricola}`;
            }

            return presentazione;
        };
    }
}

let mioStudente = new Studente("Laura", "Rossi", 30, ["Tss", "TPPW", "Sist"], 2025, 1);
console.log(mioStudente.nome);
console.log(mioStudente.presentati());

let tuoStudente = new Studente("Marco", "Verdi", 32, ["Tss", "TPPW", "Sist"], 2025);
console.log(tuoStudente.presentati());

let corsoTSS = [
    new Studente("Claudio", "Currò", 31, ["Tss", "TPPW", "Sist"], 2025, 1),
    new Studente("Jacopo", "Magnago", 22, ["Tss", "TPPW", "Sist"], 2025, 2),
    new Studente("Vania", "Villanueva", 26, ["Tss", "TPPW", "Sist"], 2025, 3)
]

corsoTSS.forEach(Studente => {
    console.log(Studente.presentati());
});

console.log("----- Test del FOR-IN -----");

//FORIN creato per gli oggetti. permette di ciclare su prop degli oggetti pur essendo quest ultimo non Enurable
for (const prop in mioStudente) {
    if(typeof mioStudente[prop] != 'function'){
        console.log(mioStudente[prop]);
    }
}

console.log(mioStudente['nome']); //notazione a parentesi quadre dove la prop è scritta come una stringa

