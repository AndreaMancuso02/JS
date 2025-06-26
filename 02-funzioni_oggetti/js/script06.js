class User{
    constructor(nome, cognome, eta, email){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.email = email;
    }
}

let nuovoUser = new User("Anna", "Rossi", 25, "anna.rossi@mail.com");

console.log(nuovoUser);

//Trasformo l'oggetto in JSON, quindi passo da oggetto a stringa
let nuovoUserJSON = JSON.stringify(nuovoUser);
console.log(nuovoUserJSON);

//
let objJSON = '{"nome": "Paolo Verdi", "corso": "Sviluppo software", "eta": 30}';

let objOBJ = JSON.parse(objJSON);
console.log(objJSON);


