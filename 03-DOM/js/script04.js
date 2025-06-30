const { use } = require("react");

class User{
    constructor(nome, cognome, eta, email){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.email = email;
    }
}

let feed = document.querySelector("#feed");
let mioForm = document.querySelector("#mioForm");

function inviaForm(event){
    // event.preventDefault();
    // console.log();

    // //posso risalire ai campi byName
    // console.log(mioForm.nome);
    // console.log(mioForm.cognome.value);
    
    // //posso sempre farlo byId
    // console.log(document.querySelector("#nome").value);

    // //posso risalire byName ma dal document
    // console.log(document.myForm.nome.value);

    let user = new User();


    feed.innerHTML = "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/
    //Adesso che so come prendere i campi li controllo uno a uno
    if(mioForm.nome.value == ""){
        feed.innerHTML += "<h5> Hai dimenticato il nome </h5>";
        mioForm.nome.setAttribute("class", "borderRed");
        event.preventDefault();
        //return false;
    }else{
        mioForm.nome.removeAttribute("class");
        user.nome = mioForm.nome.value;
    }

    if(mioForm.cognome.value == ""){
        feed.innerHTML += "<h5> Hai dimenticato il cognome </h5>";
        mioForm.cognome.setAttribute("class", "borderRed");
        event.preventDefault();
        //return false;
    }else{
        mioForm.cognome.removeAttribute("class");
        user.cognome = mioForm.cognome.value;
    }

    if(mioForm.eta.value == 0 || isNaN(mioForm.eta.value)){
        feed.innerHTML += "<h5> Hai dimenticato l'eta </h5>";
        mioForm.eta.setAttribute("class", "borderRed");
        event.preventDefault();
        //return false;
    }else{
        mioForm.eta.removeAttribute("class");
        user.eta = mioForm.eta.value;
    }

    if(mioForm.email.value.match(emailRegex) || mioForm.email.value == ""){
        feed.innerHTML += "<h5>Email errata</h5>";
        mioForm.email.setAttribute("class", "borderRed");
        event.preventDefault();
        //return false;
    }else{
        mioForm.email.removeAttribute("class");
        user.email = mioForm.email.value;
    }

    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    //localStorage.setItem("Utente connesso", "Glenda");
    event.preventDefault();
    
    //mioForm.reset();
}

mioForm.addEventListener("submit", inviaForm, false);