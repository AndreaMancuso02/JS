import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import ProvaState from '../components/ProvaState'

function App() {
  const [count, setCount] = useState(0)

  const birds = [
    {
    id: 0,
    nome: "Tucano",
    description: "Are you Toucan to me?",
    imgURL:"https://images.unsplash.com/photo-1619038779484-a27362fb82cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHVjYW5vfGVufDB8fDB8fHwy",
    isSpotted: true,
    comment: "I tucani della Guinness"
    },
    {
    id: 1,
    nome: "Flamingo",
    description: "Flamingo, balliamo un flamenco?",
    imgURL:"https://images.unsplash.com/photo-1570311875296-956ad3b970c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZsYW1pbmdvfGVufDB8fDB8fHwy",
    isSpotted: false,
    comment: "Balliamo un flamenco??"
    },
    {
    id: 2,
    nome: "Parrot",
    description: "Non ripete quello che dico",
    imgURL:"https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isSpotted: true,
    comment: "Cu cu chaaaaa"
    },
    {
    id: 3,
    nome: "Pulcinella",
    description: "Non è napoletano ma comunque bellissimo",
    imgURL:"https://images.unsplash.com/photo-1663157461390-784017646a17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHB1bGNpbmVsbGElMjBkaSUyMG1hcmV8ZW58MHx8MHx8fDI%3D",
    isSpotted: true,
    comment: "We We"
    }
  ]

  function salutaInConsole(){
    console.log("Ciao dalla console");
  }

  function handleChange(event){
    console.log(event);
    console.log(event.target.value);
  }

  function handleSubmit(event){
    //  ATT: l uso del preventDefault è necessario poiche siamo in una libreria fatta per costruire delle SPA (Single Page Application). Quindi la mia app non deve MAI ricaricare la pagina. 
    event.preventDefault();
    console.log(event);
    
  }

  return (
    <>
    <Navbar></Navbar>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={() => {console.log("Ciao dal pulsantino")}}>
          Pulsantino
        </button>
      </div>

      <hr />

      <div className='card-container'>

      {/* le card possono essere create cosi */}
      {/* <Card 
      title = "Tucano"
      imgURL = "https://images.unsplash.com/photo-1619038779484-a27362fb82cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHVjYW5vfGVufDB8fDB8fHwy"
      description = "Are you Toucan to me?"
      isSpotted={true}>
        Questo è il children, cioè il vero figlio di Card
      </Card> */}

      {/* voglio costruire le card a partire dai dati presenti nel parent */}
      {/* ATT: il metodo map è l unica alternativa al forEach che nel caso di React non puo essere utilizzato. Questo perchè mentre il map restituisce un array che JSX è in grado di renderizzare, il forEach non restituisce nulla per JSX */}
      {birds.map((bird) => (
        <Card
        key={bird.id}
        title={bird.nome}
        imgURL={bird.imgURL}
        description={bird.description}
        isSpotted={bird.isSpotted}>
        {bird.comment}
        </Card>
      ))}
      </div>
      <hr />

      <h2>Raccolta avvistati</h2>
      
      <div className="card-container">

        
        {birds.filter(bird => bird.isSpotted)
        .map(bird => (
        <Card
        key={bird.id}
        title={bird.nome}
        imgURL={bird.imgURL}
        description={bird.description}
        isSpotted={bird.isSpotted}>
        {bird.comment}
        </Card>
        ))}
      </div>


      <h1>Eventi al volo</h1>
      {/* parto con la gestione di eventi attraverso funzioni anonime */}

      <div className="card-container">
        <div className="card">
          <button onClick={()=>{
            //qui richiamo la funzione setCount
            setCount(count => count+ 1)
            alert("Hai appena cliccato sul pulsante")
          }}>
            Contatore: {count}
          </button>
        </div>

        {/* uso una funzione definita in alto */}
        <div className="card">
          {/* ATT: rispetto al passato quando si utlizzava onClick all interno dell html, in questo caso non posso utilizzare () come nell'addEventListener */}
          <button onClick={salutaInConsole}>Saluta in console</button>
        </div>


        <div className="card">
          {/* gestisco un campo input al change */}
          <input type="text" onChange={handleChange} />
        </div>

        <div className="card">
          {/* gestire un evento submit su un piccolo form*/}
          <form onSubmit={handleSubmit}>
            <button type='submit'>Sub</button> 
          </form>

        </div>
      </div>

      <h3>Use State</h3>
      <hr />
      <div className="card-container">
        <ProvaState></ProvaState>
      </div>

    </>
  )
}

export default App
