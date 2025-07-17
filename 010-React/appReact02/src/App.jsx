import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

function App() {
  const [count, setCount] = useState(0)

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

        <Card 
        title = "Tucano"
        imgURL = "https://images.unsplash.com/photo-1619038779484-a27362fb82cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHVjYW5vfGVufDB8fDB8fHwy"
      description = "Are you Toucan to me?"
      isSpotted={true}>
        Questo è il children, cioè il vero figlio di Card
      </Card>

      <Card
      title ="Flamingo"
      imgURL ="https://images.unsplash.com/photo-1629394661462-13ea8fe156ef?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      description ="Flamingo, balliamo un flamenco?"
      isSpotted={false}>
        Quanto sono belli i feniccoteri rosa
      </Card>
      
      <Card
      title ="Parrot"
      imgURL ="https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      description ="Cu cu chaaaaa"
      isSpotted={true}>
        Non sapeva ripetere il mio nome ma lo vedevo pensare
      </Card>

      
      </div>

    </>
  )
}

export default App
