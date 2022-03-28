import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css';
//importation format de date
// import formaDate from '../hookpersonnalisé/format-date';
//importation couleur des types 
import formatType from '../hookpersonnalisé/format-type'; 
//redirection page 
import {useHistory } from 'react-router-dom';
  
type Props = {
  pokemon: Pokemon,
  //? signifie facultatif en typescript 
  borderColor?: string
};
  
const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColor= '#009688'}) => {

    //hover souris
    const [color, setColor] = useState<string>();
    //recupere l'historique du navigateur 
    const history = useHistory();

    const showBorder = () => {
        setColor(borderColor);
    } 

    const hideBorder = () => {
        setColor('#f5f5f5'); //remet la couleur d'origine lorsque la souris n'est plus sur l'element
    }



    //Redirection caractéristique pokemon unique 
    const goToPokemon = (id: number) => {
        history.push(`pokemons/${id}`);
    }

  
                                    
  return (
    <div className="col s6 m4" onClick={()=> goToPokemon(pokemon.id)} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
      <div className="card horizontal" style={{ borderColor: color}}>
        <div className="card-image"> 
          <img src={pokemon.picture} alt={pokemon.name}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            {/* <p><small>{formaDate(pokemon.created)}</small></p> */}
            {/* <p><small>{pokemon.created.toString()}</small></p> */}
            {/* recupération des types  */}
            {pokemon.types.map(type =>
                <span key={type} className= { formatType(type)}>{type}</span>
            )}
          </div>
        </div>
      </div> 
    </div>
  );
}
  
export default PokemonCard;