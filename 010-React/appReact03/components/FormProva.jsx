import { useState } from "react";

function FormProva(stampaUser){

    //questo oggetto user deve corrispondere alla struttura del form e alle sue proprieta
    const [user, setUser] = useState({
        nome:"",
        cognome:""
    })

    const handleChange = (e)=>{
        // name e value sono rispettivamente la chiave e il valore dei singoli
        const{name, value} = e.target; //<input name = "nome" value = "Dario"

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e); // ho gia tutto il form tra le mani
        console.log(e.target[0].name.value);
        console.log(e.target[1].name.value);

        stampaUser(user);
    }

    return(
        <>
            <div className="card">

                <form onSubmit={handleSubmit}>
                    <label>Nome</label>
                    {/* ATT: l'uso della prop name all'interno dei campi input è FONDAMENTALE */}
                    <input 
                    type="text" 
                    name="nome"
                    value={user.nome}
                    onChange={handleChange}/>

                    <label>Cognome</label>
                    <input 
                    type="text" 
                    name="cognome"
                    value={user.cognome}
                    onChange={handleChange}/>
                    
                    <input 
                    type="submit"
                    value="Invia"/>
                </form>
            </div>



        </>
    )
}

export default FormProva