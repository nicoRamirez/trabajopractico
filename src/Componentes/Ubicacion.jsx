import React, { Fragment } from 'react'
import './styles/cardPokemon.css'
const Ubicacion = ({ubicacion}) => {

    
     return ( 
         <Fragment>

          <div className="card cardPokemon">
  <div className="row g-0">
    <div className="col-md-4">
      <img id="poke"src={ubicacion?.area?.[0]?.url} alt={ubicacion?.item?.name}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{ubicacion?.name}</h5>
        <h5>id:</h5>
        <p className="card-text">{ubicacion?.id}</p>
        <h5>nombre de la region:</h5>
        <p className="card-text">{ubicacion.region?.name}</p>
        <h5>generacion de juego:</h5>
        <p className="card-text"><small className="text-muted"> {ubicacion?.game_indices?.[0].generation?.name}</small></p>
      </div>
    </div>
  </div>
</div>
         </Fragment>
         
      );
 }
  
 export default Ubicacion;