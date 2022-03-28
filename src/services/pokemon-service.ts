
//FACTORISER LES REQUETES DANS UN FICHIER 

// import { stringify } from "querystring";

import Pokemon from "../models/pokemon";
 
export default class PokemonService {
 
    //recuperation tout les pokemons
  static getPokemons(): Promise<Pokemon[]> {
    return fetch('http://localhost:3001/pokemons')
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }
 
   //recuperation pokemon par id ( si existant ou null )
  static getPokemon(id: number): Promise<Pokemon|null> {
    return fetch(`http://localhost:3001/pokemons/${id}`)
      .then(response => response.json())
      //si date null
      .then(data => this.isEmpty(data) ? null : data)
      .catch(error => this.handleError(error));
  }

  //requete update pour enregistrer les changement dans notre db
  static updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
      return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
          method : 'PUT',
          //convertir en JSON
          body : JSON.stringify(pokemon),
          headers : {'Content-Type':'application/json'}
      })
       .then( response => response.json())
       .catch( error => this.handleError(error));
  }

  //requete pour delete un pokemon 
  static deletePokemon(pokemon: Pokemon ): Promise<{}> {
      return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
          method : 'DELETE',
          headers : { 'Content-Type' : 'application/json' }
      })
      .then( response => response.json())
      .catch( error => this.handleError(error));
  }

  //requete pour ajouter un pokemon 

  

  static addPokemon(pokemon: Pokemon): Promise<Pokemon> {

     
       delete pokemon.created;

      return fetch(`http://localhost:3001/pokemons`, {
          method: 'POST',
          body : JSON.stringify(pokemon),
          headers : {'Content-Type' : 'application/json'}

      })
      .then( response => response.json()) 
      .catch( error => this.handleError(error));
    }


    //BARRE DE RECHERCHE
     
    static searchPokemon( term: string): Promise<Pokemon[]> {
      return fetch(`http://localhost:3001/pokemons?q=${term}`)
      .then( response => response.json())
      .catch( error => this.handleError(error))
    }




 
  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  //Gerer les ERREURS ( avec .catch() méthodes des promise ) 
  static handleError(error: Error): void {
        console.error(error)
  }
}


