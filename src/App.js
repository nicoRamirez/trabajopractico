import {Fragment,useState} from 'react';
import Header from "./Componentes/Header";
import Menu from './Componentes/Menu';
import CardIndex from './Componentes/CardIndex';
import Footer from './Componentes/Footer';
import Pokemon from './Componentes/Pokemon';
function App() {

const[pokemon,setPokemon] = useState({});

const consultarApi= async()=>{
  try{
  const api= await fetch('https://pokeapi.co/api/v2/pokemon/{id}');
  const pokemon = await api.json();
  setPokemon(pokemon);
  }
  catch(error){
    console.log(error);
  }
}
  return (
    <Fragment>
    <Header/>
    <Menu/>
    <div>
    <CardIndex/>
    <Pokemon/>
    </div>
    <CardIndex/>
    <Footer/>
    </Fragment>
    
  );
}

export default App;
