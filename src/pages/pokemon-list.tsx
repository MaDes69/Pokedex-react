import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
// import POKEMONS from '../models/mock-pokemon';
import PokemonCard from '../components/pokemon-card';
import PokemonService from '../services/pokemon-service';
import {Link} from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';
// import { usePokemonList } from '../hookpersonnalisé/usePokemon'
import "./pokemon-list.css";
  
const PokemonList: FunctionComponent = () => {

    // const pokemons = usePokemonList();

                                        //initialisation 
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
  useEffect(() => {
    
    //FACTORISATION REQUETE
    PokemonService.getPokemons().then(pokemons => setPokemons(pokemons));


    //APPEL A L'API REST 
    // fetch('http://localhost:3001/pokemons')
    // .then(response => response.json())
    // .then((pokemons) => {
    //   setPokemons(pokemons)
    // })

    //METHODE avec MOCK
    // setPokemons(POKEMONS);
  }, []);
  
  return (
    <div>
      <h1 className="center">Pokédex</h1>
      
      <div className="container"> 
        <div className="row"> 
        <PokemonSearch />
        {pokemons.map( pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}  />
        ))}
        </div>
       
        <div>
           <Link className="btn-floating btn-small waves-effect  z-depth-3" style={{position: 'fixed', bottom: '25px', top: '90%', left:'95%'}} to="/pokemons/add">
          <li className="material-icons" style={{ padding:'3.5px'}} >add </li>
        </Link>
        </div>
      </div>
    </div> 
  );
}
  
export default PokemonList;