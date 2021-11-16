import {Fragment,useState} from 'react';
import Header from "./Componentes/Header";
import Menu from './Componentes/Menu';
import CardIndex from './Componentes/CardIndex';
import Footer from './Componentes/Footer';
import './Componentes//styles/CardIndex.css'
function App() {


  return (
    <Fragment>
    <Header/>
    <Menu/>
    <CardIndex/>
    <Footer/>
    </Fragment>
    
  );
}

export default App;
