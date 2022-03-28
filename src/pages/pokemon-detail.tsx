import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Pokemon from '../models/pokemon';
import Loader from '../components/loader'
// import POKEMONS from '../models/mock-pokemon';
//importation format de date
import formaDate from '../hookpersonnalisé/format-date';
//importation couleur des types 
import formatType from '../hookpersonnalisé/format-type';
import './pokemon-detail.css';
import PokemonService from '../services/pokemon-service'

type Params = { id: string };
  

//props typé d'une donnée qui vient de l'URl
const PokemonsDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
                                    //cette objet est soit un pokemon soit une valeur null 
  const [pokemon, setPokemon] = useState<Pokemon|null>(null);
  

  //si aucun params.is de l'URL ne match avec l'ID d'un pokemon alors le pokemon n'existe pas et est null 
  useEffect(() => {
    //REQUETE FACTORISER
                            //le + convertis une chaine de caractere en nombre 
    PokemonService.getPokemon(+match.params.id).then(pokemon => setPokemon(pokemon));

    //API REST 
    // fetch(`http://localhost:3001/pokemons/${match.params.id}`)
    // .then( response => response.json())
    // .then(pokemon => {
    //   //verifie la reponse contient un id 
    //   if(pokemon.id) setPokemon(pokemon);
    // })


    //AVEC les MOCKS
    // POKEMONS.forEach(pokemon => {
    //   if (match.params.id === pokemon.id.toString()) {
    //     setPokemon(pokemon);
    //   }
    // })
  }, [match.params.id]);
    
  return (
    <div>
        {/* si on trouve un pokemon on l'affiche  */}
      { pokemon ? (
        <div className="row">
          <div className="col s12 m8 offset-m2"> 
            <h2 className="header center">{ pokemon.name }</h2>
            <div className="card hoverable"> 
              <div className="card-image">
                <img src={pokemon.picture} alt={pokemon.name} style={{width: '250px', margin: '0 auto'}}/>
                <Link to={`/pokemons/edit/${pokemon.id}`} className="btn btn-floating halfway-fab waves-effect waves-light" >
                <span className="material-icons">auto_fix_high</span>
                </Link>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <table className="bordered striped">
                    <tbody>
                      <tr> 
                        <td>Nom</td> 
                        <td><strong>{ pokemon.name }</strong></td> 
                      </tr>
                      <tr> 
                        <td>Points de vie</td> 
                        <td><strong>{ pokemon.hp }</strong></td> 
                      </tr> 
                      <tr> 
                        <td>Dégâts</td> 
                        <td><strong>{ pokemon.cp }</strong></td> 
                      </tr> 
                      <tr> 
                        <td>Types</td> 
                        <td>
                          {pokemon.types.map(type => (
                           <span key={type} className={formatType(type)}>{type}</span>
                          ))}</td> 
                      </tr> 
                      <tr> 
                        <td>Date de création</td> 
                        <td>{formaDate(pokemon.created)}</td> 
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-action">
                  <Link to="/">Retour</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4 className="center"><Loader /></h4>
      )}
    </div>
  );
}
  
export default PokemonsDetail;