const demo = document.querySelector("#demo");

let studConnesso = JSON.parse(localStorage.getItem("studente"));

demo.innerHTML = `<h3>Ciao ${studConnesso.nome} ${studConnesso.cognome}</h3>`;