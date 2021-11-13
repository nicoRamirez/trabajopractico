import React, { Fragment } from 'react'
import './styles/Header.css'
import Imagen from "../Componentes/Imagen";




const Header = () => {
    return ( 
        <Fragment>
            <div className="header">
            <Imagen/>
            </div>
            
        </Fragment>
        
     );
}
 
export default Header;