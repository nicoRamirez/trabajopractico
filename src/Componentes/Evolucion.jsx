import React, { Fragment } from 'react'
import './styles/cardPokemon.css'
const Evolucion = ({pokemonEvolucion}) => {

    
     return ( 
        <Fragment>
        <div className="card cardPokemon">
        <div className="row g-0">
          
          <div className="col-md-8">
            <div className="card-body">
                <h2>Ubicacion del pokemon:</h2>
              <h5 className="card-title">{pokemonEvolucion?.[0]?.location_area?.name}</h5>
              
            </div>
          </div>
        </div>
      </div>
               </Fragment>
         
      );
 }
  
 export default Evolucion;