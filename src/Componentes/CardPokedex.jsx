import React, { Fragment } from 'react'
import './styles/CardIndex.css'
const CardPokedex = ({props}) => {

   const  buscarPokemon = ()=>{
        
    }  
    
    return ( 
        <Fragment>poke
        <div class="card">
            <div class="card-body">
                <h3>Pokedex</h3>
                <p>Encontraras el pokemon que busques por nombre:</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <input type="text" class="form-control" id="pokemon"/>
                    <button class="btn btn-primary me-md-2" type="button"
                        onClick={()=>buscarPokemon()}>Buscar</button>
                </div>
            </div>
        </div>
            
        </Fragment>
        
     );
}
 
export default CardPokedex;