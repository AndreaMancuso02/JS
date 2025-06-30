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
        feed.innerHTML += "Mi spiace non hai inserito la password";
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