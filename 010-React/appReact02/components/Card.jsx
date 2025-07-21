import { useState } from 'react';
import './Card.css'

// function Card(){
//     const title = "Tucano";
//     const imgURL = "https://images.unsplash.com/photo-1618191702724-1e413e177fde?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//     const description = "Questo è un tucano"
//     return(
//         <div className="card">
//             <div className="card-image">
//                 <img src={imgURL} alt=""/>
//             </div>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{description}</p>
//             </div>
//         </div>
//     )
// }


// ATT: in questo modo io definisco delle props le quali verranno valorizzate nel component Parent. il dato esiste nel parent
// function Card(props){
//     const title = props.title;
//     const description = props.description;
//     const imgURL = props.imgURL;

//     return(
//         <div className="card">
//              <div className="card-image">
//                  <img src={imgURL} alt=""/>
//              </div>
//              <div>
//                  <h2>{title}</h2>
//                  <p>{description}</p>
//              </div>
//          </div>
//     )
// }


// in questa versione non passo un parametro chiamato props ma direttamente un oggetto
// function Card({title, description, imgURL}){
//     return(
//         <div className="card">
//               <div className="card-image">
//                   <img src={imgURL} alt=""/>
//               </div>
//               <div>
//                   <h2>{title}</h2>
//                   <p>{description}</p>
//               </div>
//           </div>
//     )
//}


// in questa versione utilizzerò una parola chiave "children" per raccogliere ciò che scrivo a mano nel parent all'interno del settore child. quindi Childer non è una semplice prop, ma diventa parola chiave

function Card({title, description, imgURL, children, isSpotted}){
    const [changeColor, seChangeColor] = useState(isSpotted)

    const heandleClick = () => {seChangeColor(!changeColor)}

        return(
                <div className={`${"card"} ${changeColor ? "bg_v" : "bg_r"}`}>
                    <div className="card-image">
                        <img src={imgURL} alt=""/>
                    </div>
                    <div>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <p>Commento: {children}</p>
                    </div>

                    <div>
                        <button onClick={heandleClick}
                         className={changeColor ? "bg_v" : "bg_r"}
                         style={{border: "1px solid black"
                         }}>
                            {changeColor ? "Avvistato" : "Non avvistato"}
                        </button>
                    </div>
                </div>
        )
}

export default Card;