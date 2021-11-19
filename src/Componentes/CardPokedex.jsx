import React, { Fragment, useState } from 'react'
import Pokemon from './Pokemon';
import UbicacionDePokemon from './UbicacionDePokemon';
import './styles/CardIndex.css'

const CardPokedex = () => {

    const[pokemon,setPokemon] = useState({});

    

    const consultarApi= async(nombre)=>{
      try{
      const api= await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    
      const pokemon = await api.json();
      setPokemon(pokemon);
      
      }
      catch(error){
        console.log(error);
      }
    }  
    const consultaApiUbi= async(nombre)=>{
      try{
      const api= await fetch(`https://pokeapi.co/api/v2/characteristic/${nombre}`);
    
      const okemoncaract = await api.json();
      setPokemoncaract(okemoncaract);
      
      }
      catch(error){
        console.log(error);
      }
    }   

    const[pokemoncaract,setPokemoncaract] = useState({});

    const ubicacion= async()=>{
      try{
      const api= await fetch(pokemon.location_area_encounters);
    
      const pokemonEvo = await api.json();
      setPokemonEvo(pokemonEvo);
      
      }
      catch(error){
        console.log(error);
      }
    }   

    const[pokemonEvo,setPokemonEvo] = useState({});
      

    
    const enviarDatos = (event)=>{
      event.preventDefault();
      consultarApi(datos.nombre);
      consultaApiUbi(pokemon.id);
      ubicacion();
    
      console.log(pokemonEvo);
    }

    const[datos,setDatos] = useState([{
      nombre:" "
    }]);
    const  handleInputChange =(event)=>{
      setDatos({
        ...datos,
        [event.target.name] : event.target.value
      })
    }
    return ( 
        <Fragment>
          <div className="body">
        <div className="card">
            <div className="card-body">
                <h3>Pokedex</h3>
                <p>Encontraras el pokemon que busques por nombre o id:</p>
                <form onSubmit={enviarDatos}>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <input type="text" className="form-control" name="nombre" id="pokemon" 
                onChange={handleInputChange}/>
                <input type="submit" value="buscar" className="btn btn-primary me-md-2" />
                </div>
                </form>
                
            </div>
        </div>
       <div>
       <Pokemon pokemon={pokemon} 
       pokemoncaract ={pokemoncaract}
       />
<UbicacionDePokemon pokemonEvolucion={pokemonEvo}/> 
       </div>
       </div>
       
        </Fragment>
        
     );
}
 
export default CardPokedex;