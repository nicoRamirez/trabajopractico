import React, { Fragment, useState } from 'react'
import Ubicacion from './Ubicacion';
import './styles/CardIndex.css'
const CardUbicacion = () => {

    const[ubicacion ,setUbicacion] = useState({});

    const[datos,setDatos] = useState([{
      nombre:" "
    }]);

    const consultarApi= async(nombre)=>{
      try{
      const api= await fetch(`https://pokeapi.co/api/v2/location/${nombre}`);
    
      const baya = await api.json();
      setUbicacion(baya);
      console.log(baya);
      }
      catch(error){
        console.log(error);
      }
    }   

    const  handleInputChange =(event)=>{
      setDatos({
        ...datos,
        [event.target.name] : event.target.value
      })
    }
    const enviarDatos = (event)=>{
      event.preventDefault();
      consultarApi(datos.nombre);
    }
    return ( 
        <Fragment>
        <div className="body">
      <div className="card">
          <div className="card-body">
              <h3>Pueblo</h3>
              <p>Encontraras el pueblo que busques por nombre:</p>
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
     <Ubicacion ubicacion={ubicacion}/>

     </div>
     </div>
      </Fragment>
        
     );
}
 
export default CardUbicacion;