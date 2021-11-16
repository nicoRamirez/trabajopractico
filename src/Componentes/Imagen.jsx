import React, { Fragment } from 'react'
import './styles/Header.css'
import logo from '../assets/img/Pokémon_logo.svg.png'
import pokebola from '../assets/img/Pokebola.png'

const Imagen = () => {
    return ( 
        <Fragment>
        <div className="imagenes">
            <img id="logo" src={logo} alt="pokemon"/>
            <img id="pokebola" src={pokebola} alt="pokebola"/>

        </div>
        </Fragment>
     );
}
 
export default Imagen;