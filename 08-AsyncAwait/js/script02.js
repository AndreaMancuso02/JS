//Operazioni in sequenza
async function svolgiInSequenza() {
    
    const step1 = await primaFunzione();
    const step2 = await secondaFunzione(step1);
    const step3 = await terzaFunzione(step2);

    return step3;
}

async function primaFunzione(){
    return new Promise(resolve =>{
        setTimeout(() => 
            resolve("Risultato della prima Funzione"), 2000);
    })
}

async function secondaFunzione(step){
    return step;
}

async function terzaFunzione(step){
    return step;
}

 console.log(
   svolgiInSequenza()
 )