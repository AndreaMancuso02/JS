let clockDiv = document.querySelector("#clock");

function orologio(){

    let oraAttuale = new Date();
    let ora = oraAttuale.getHours() < 10 ? "0"+oraAttuale.getHours(): oraAttuale.getHours();
    let min = oraAttuale.getMinutes() < 10 ? "0"+oraAttuale.getMinutes(): oraAttuale.getMinutes();
    let sec = oraAttuale.getSeconds() < 10 ? "0"+oraAttuale.getSeconds(): oraAttuale.getSeconds();
    
    clockDiv.innerHTML= `<h2>Sono le ore: ${ora}:${min}:${sec} </h2>`
}

orologio();

setInterval(orologio, 1000);