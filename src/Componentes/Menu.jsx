import React, { Fragment } from 'react'


const Menu = () => {
    return ( 
        <Fragment>
        <div>
            <nav class="nav nav-pills flex-column flex-sm-row">
            <a class="flex-sm-fill text-sm-center nav-link active" href="#">Pokedex</a>
            <a class="flex-sm-fill text-sm-center nav-link" href="#">Bayas</a>
            <a class="flex-sm-fill text-sm-center nav-link" href="#">Evolición</a>
            </nav>
        </div>
        </Fragment>
     );
}
 
export default Menu;