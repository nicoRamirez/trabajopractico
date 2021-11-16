import React, { Fragment } from 'react'


const Menu = () => {
    return ( 
        <Fragment>
        <div>
            <nav className="nav nav-pills flex-column flex-sm-row">
            <a className="flex-sm-fill text-sm-center nav-link active" href="#">inicio</a>
            <a className="flex-sm-fill text-sm-center nav-link" href="#">Generaciones</a>
            <a className="flex-sm-fill text-sm-center nav-link" href="#">Juegos</a>
            </nav>
        </div>
        </Fragment>
     );
}
 
export default Menu;