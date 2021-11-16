import React, { Fragment } from 'react'
import './styles/cardPokemon.css'
const Pokemon = ({pokemon,pokemoncaract}) => {

    
     return ( 
         <Fragment>

          <div className="card cardPokemon">
  <div className="row g-0">
    <div className="col-md-4">
      <img id="poke"src={pokemon.sprites?.front_default} alt={pokemon.name}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{pokemon.name}</h5>
        <h5>id:</h5>
        <p className="card-text">{pokemon.id}</p>
        <h5>experiencia base:</h5>
        <p className="card-text">{pokemon.base_experience}</p>
        <h5>tipo:</h5>
        <p className="card-text"><small className="text-muted">{pokemon.types?.[0].type.name}</small></p>
        <h5>descripción:</h5>
        <p className="card-text">{pokemoncaract.descriptions?.[1].description}</p>
      </div>
    </div>
  </div>
</div>
         </Fragment>
         
      );
 }
  
 export default Pokemon;