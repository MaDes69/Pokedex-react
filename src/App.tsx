// useState pour Hook state( fonction javascript qui déclare une variable d'état)
// useEffect agit sur la gestion des cycles de vie d'un composants ( componentDidMount : recuperation de donnée a distance d'un serveur / componentDidUpdate( prevProps, prevState) avant lise a jour du composant, componentWillUnmount)
//cas1 : useEffect(() =>{
//     FruitsAPI.getFruits(currentUserID).then(fruits = setFruits(fruits));}, []) ---> initialisation
//cas2 : useEffect(() =>{
//     FruitsAPI.getFruits(currentUserID).then(fruits = setFruits(fruits));}, [currentbUserID]) --> tu fais appel a react seulemeent si l'id est modifié (Performance optimale)
//cas3 : useEffect(() =>{
//      FruitsAPI.subscribeToFruits(currentUserID, doSomething()) ;
//       return() => {
//       FruitsAPI.unsubscribeFromFruits(currentUserID, doSomething());
//         }
//      }, [currentUserID])  -->se désabonne a l'api fruit 


import React, { FunctionComponent, useState, useEffect } from 'react'; 
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon';
import PokemonList from './pages/pokemon-list';
import {BrowserRouter as Router, Switch, Route} from  "react-router-dom";
import PokemonsDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/page-edit';
import PokemonAdd from './pages/pokemon-add';
import NavBar from "./components/NavBar";
import Login from './pages/login'
import Home from './pages/home'
import Footer from './components/footer'
import './app.css';
import PrivateRoute from './PrivateRoute'
// import styled from 'styled-components';
  
//FC = Function Component, React.FC = FunctionComponent
const App: FunctionComponent = () => {
    //Const : va permettre de remplacer la varible dans le jsx entre moustache dans notre DOM virtuel
    //const name: String = 'React';
    //Etat :[état actuel, fonction pour modifier la valeur de cette état ] = useState('état initial')
    //const [name, setName ] = useState<String>('React');

    const [pokemons, setPokemons] = useState<Pokemon[]>([]); //initialise le tableau pokemon 
   
    useEffect(() =>{  
        setPokemons(POKEMONS); // recuperation de tout les pokemons
    }, [])

    // Cette constante est notre gestionnaire d'evenement
    //const.showPokemonsCount = () => {
    //console.log();
    //};

    // ( ajouter des parametres entre parenthèses pour cibler  )
    //const.showPokemonsName= (name) => {
    //console.log(name);
    //};

    // gestionnaire d'evenemennt par touche ( clic gauche ou droit )
    //const addPokemin = (name, e) => {
    //   if ( e.nativeEvent.which === 1){
    //     console.log(`Le pokémon ${name} a été ajouté au pokédex, avec le clic gauche`/)
    //    }else if (e.nativeEvent.which === 3 ){
    //     console.log(`Le pokémon ${name} a été ajouté au pokédex, avec le clic droit`/)
    //    }
    // };

    //conditions affichage DOM ( condidion et operateur logique, si condition non respecté jsx n'affichera pas le contenu )
    // return (
    //<div>
    //      {age > 18 && 
    //       <p>Vous êtes majeur</p>
    //      }
    // </div>)

    // return (
        //      <p>{age > 18 ? (
        //    Vous etes majeur 
        //       ) : (
        //      Vous êtes mineur 
        //      )};

 return (

 <Router>
    <NavBar />

     {/* Route */}
     <Switch>
         
       
         {/* <Route exact path='/login' component={Login} /> */}

           {/* mettre PrivateRoute pour rendre les route accessible apres login */}
         <Route exact path='/' component={Home} />
         <Route exact path='/pokemons' component={PokemonList} />
         <Route exact path='/pokemons/add' component={PokemonAdd} />
         <Route  exact path='/pokemons/edit/:id' component= {PokemonEdit} />
         <Route  path='/pokemons/:id' component={PokemonsDetail} />
         
         <Route component={PageNotFound} />
         
     </Switch>
     <Footer />
 </Router>
 
     
//   <div>
//       <h1 className="center">POKEDEX</h1>
//       {/* <p onClick={showPokemonsCount}>Afficher le nombre de pokemons</p> */}
//       {/* <p onClick={showPokemonName( "Salamèche" )}>Salamèche</p> */}
//       {/* <button onClick={(e) => addPokemon(name, e)}>ajouter un pokemon  </button> */}
//       <div className="container">
//           <div className="row">
//               {pokemons.map(({id, name, picture, created}) =>
//               <div className='col s6 m4' key={id}>
//               <div className="card horizontal">
//                   <div className="card-image">
//                   <img src= {picture} alt={name} />
//                   </div>
//                   <div className="card-stacked">
//                   <div className="card-content">
//                       <p>{name}</p>
//                       <p>{created.toString()}</p>
//                   </div>
//                   </div> 
//                 </div>
//                 </div>
//                   )}
//           </div>
//       </div>
//   </div>
 )
}
  
export default App;