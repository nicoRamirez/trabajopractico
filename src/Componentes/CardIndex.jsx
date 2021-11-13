import React, { Fragment } from 'react';
import CardPokedex from './CardPokedex'
import CardBayas from './CardBayas';
import CardEvolucion from './CardEvolucion';
import './styles/CardIndex.css'


const CardIndex = () => {

    

    return ( 
        <Fragment>
            <div className="cardIndex">
                <CardPokedex/>
                <CardBayas/>
                <CardEvolucion/>   
            </div>               
        </Fragment>
        
     );
}
 
export default CardIndex;