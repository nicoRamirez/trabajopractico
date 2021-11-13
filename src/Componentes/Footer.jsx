import React, { Fragment } from 'react';
import './styles/Footer.css';
import copy from '../assets/img/copyright-solid-24.png'
const Footer = () => {


    return (  
        <Fragment>
            <div className="footer">
                <img id="copy"src={copy}/>
                2021
            </div>
            
        </Fragment>
        
    );
}
 
export default Footer;