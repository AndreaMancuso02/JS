function salutami(){
    document.querySelector("#demo").innerHTML = "<h1>Ciao Dario</h1>"
}

let btn2 = document.querySelector("#btn2");
btn2.onclick = salutami;
// in disuso

let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", salutami);

let demo = document.querySelector("#demo");
demo.addEventListener("mouseenter", function(){
    demo.setAttribute("style", "background-color: blue");
})
demo.addEventListener("mouseleeve", function(){
    demo.removeAttribute("style");
})


