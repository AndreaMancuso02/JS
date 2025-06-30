class User{
    constructor(nome, password, todoList){
        this.nome = nome;
        this.password = password;
        this.todoList = todoList;
    }
}
//let nuovoUser = new User("Doua", "Boufqir", []);
let nuovoUser = new User();
let feed = document.querySelector("#feed");
let mioForm = document.querySelector("#mioForm");

let userConnesso = new User();
function controllaForm(event){

    if(mioForm.nome == ""){
        event.preventDefault();
        feed.innerHTML += "Mi spiace non hai inserito il nome";
    }else{
        userConnesso.nome = mioForm.nome.value;
    }
    
    if(mioForm.password.value == ""){
        event.preventDefault();
        feed.innerHTML += "Mi spiace non hai inserito la passwprd";
    }else{
        userConnesso.password = mioForm.password.value;
    }

    //registro stesso qui dentro il mio user
    if(userConnesso.nome != "" && userConnesso.password != ""){
        userConnesso.todoList = [];
        let userJSON = JSON.stringify(userConnesso);
        localStorage.setItem("user", userJSON);
    }

}

mioForm.addEventListener("submit", controllaForm);

// function inviaForm(event){
//     feed.innerHTML = "";

//     if(mioForm.nome.value == ""){
//         feed.innerHTML += "<h5> Hai dimenticato il nome </h5>";
//         mioForm.nome.setAttribute("class", "borderRed");
//         event.preventDefault();
//         //\\\\return false;
//     }else{
//         mioForm.nome.removeAttribute("class");
//         nuovoUser.nome = mioForm.nome.value;
//     }
    
//     if(mioForm.password.value == ""){
//         feed.innerHTML += "<h5> Hai dimenticato la password </h5>";
//         mioForm.password.setAttribute("class", "borderRed");
//         event.preventDefault();
//         //\\\\return false;
//     }else{
//         mioForm.password.removeAttribute("class");
//         nuovoUser.password = mioForm.password.value;
//     }
    
//     nuovoUser.todoList = [];
    
//     console.log(nuovoUser);
//     localStorage.setItem("user", JSON.stringify(nuovoUser));
    
//     //event.preventDefault();
//     // mioForm.reset();
// }

// mioForm.addEventListener("submit", inviaForm);