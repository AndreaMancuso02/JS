let demo = document.querySelector("#demo");

const urlEP = "https://reqres.in/api/users?page=1";

//se nella fetch non inserisco un configuration object, di default sto eseguendo un metodo GET
fetch(urlEP, {
    headers: {"x-api-key" : "reqres-free-v1"}
})
.then(data => {
    return data.json()
})
.then(response => {
    console.log(response);

    //voglio il nome di George
    // console.log(response.data[0].first_name);

    //voglio il nome di tutti
    for(let i = 0; i < response.data.length; i++){
        console.log(response.data[i].first_name);
        console.log(response.data[i].email);

        creaCard(response.data[i]);
    }
})

class Persona{
    constructor(first_name, last_name, email, avatar){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.avatar = avatar;
    }
}

/**
 * @param {Persona} persona 
 */
function creaCard(persona){
    let li = document.createElement("li");
    li.textContent = persona.first_name + " " + persona.last_name + " " + persona.email;

    let img = document.createElement("img");
    img.setAttribute("src", persona.avatar);

    li.appendChild(img);
    demo.appendChild(li);
}



