import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import Pokemon from '../models/pokemon';
import PokemonService from '../services/pokemon-service';
import './pokemon-search.css';
 
const PokemonSearch: FunctionComponent = () => {
  
    //etat de recherche
  const [term, setTerm] = useState<string>('');
   //etat de stockage
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
 
  //comportement dans champs de recheerche
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const term = e.target.value;
    setTerm(term);  //etat du composant 
    // verification que le champs de recherche fais plus de 2 caracteres de long sinon on renvoit a null
    if(term.length <= 1) {
      setPokemons([]);
      return;
    }
    //METHOD SEARCH ( dans pokemon-service) 
    PokemonService.searchPokemon(term).then(pokemons => setPokemons(pokemons));
  }
  
  return (
    <div className="row"> 
    <div className="col s16 m6 offset-m3"> 
      <div className="card-seach"> 
      <div className="card-content"> 
        <div className="input-field"> 
        <input type="text" placeholder="Rechercher un pokémon" value={term} onChange={e => handleInputChange(e)} /> 
        </div> 
        <div className='collection'>
        {pokemons.map((pokemon) => (
          <Link key={pokemon.id} to={`/pokemons/${pokemon.id}`} className="collection-item">
            {pokemon.name}
          </Link>
        ))}
        </div> 
      </div> 
      </div> 
    </div> 
    </div>
  );
}
  
export default PokemonSearch;