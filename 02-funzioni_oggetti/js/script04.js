//NOTAZIONE LETTERALE
let studente = {
    //prop
    nome: "Dario",
    cognome: "Mennillo",
    eta: 36,
    matricola : 123,
    zaino: {
        pc: {
            marca: "Dell",
            mod: "Vostro",
            ram: 8
        },
        libro: "Guida Galattica per autostoppisti"
    },
    corsi: [
        "sviluppo Software",
        "Sviluppo Web",
        "Sistemisti"
    ],

    //metodi
    superaEsame: function(){
        return "Bravo, hai superato l'esame"
    },
    presentati(){
        let presentazione = `Ciao, mi chiamo ${this.nome} ${this.cognome} e ho ${this.eta} anni`;
        return presentazione;
    }
}

console.log(studente.nome);
console.log(studente.presentati());
console.log(studente.superaEsame());
//voglio conoscere il modello del pc dello studente
console.log(studente.zaino.pc.mod + " è il modello del pc");
//voglio sapere quali sono i corsi del mio studente
studente.corsi.forEach(corso =>{
    console.log(corso);
});


let motocicletta = {
    marca: "",
    modello: "",
    cilindrata: "",
    

    marcia: 0,
    vel: 0,
    num_giri: 0,
    acceso: false,

    creaMoto(marca, modello, cilindrata){
        this.marca = marca;
        this.modello = modello;
        this.cilindrata = cilindrata;
    },

    modifica_giri(num_giri){
        this.num_giri = num_giri;
        return "giri motore: " + this.num_giri;
    },

    cambiaMarcia(marcia){
        this.marcia = marcia;
        return "Sei alla marcia:" + this.marcia;
    },

    calcolaVel(){
        this.vel = (this.num_giri * this.marcia) / 100;
        return `Velocità attuale ${this.vel}`;
    }
}

motocicletta.creaMoto("Kawasaki", "z750", 750);
motocicletta.modifica_giri(4000);
motocicletta.cambiaMarcia(3);
console.log(motocicletta.calcolaVel());
console.log(motocicletta);

