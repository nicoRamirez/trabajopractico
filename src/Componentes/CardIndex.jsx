import React, { Fragment } from 'react';
import CardPokedex from './CardPokedex'
import CardUbicacion from './CardUbicacion';

import './styles/CardIndex.css'


const CardIndex = () => {

    

    return ( 
        <Fragment>
            <div className="cardIndex">
                <CardPokedex />
                
                <CardUbicacion/>  
            </div>               
        </Fragment>
        
     );
}
 
export default CardIndex;