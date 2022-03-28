import React, { FunctionComponent, useState } from 'react';
import {useHistory} from 'react-router-dom'
import Pokemon from '../models/pokemon';
import formatType from '../hookpersonnalisé/format-type';
import PokemonService from '../services/pokemon-service';
import './pokemon-form.css';
  
type Props = {
  pokemon: Pokemon,
  isEditForm: boolean,
};

//initialisé les données déjà enregistré dans le mock sur le formulaire 

type Field = {
  value?:any,
  error?:string,
  isValid?:boolean,
}
  
type Form = {
  picture: Field,
  name: Field,
  hp: Field,
  cp: Field,
  types: Field
}



const PokemonForm: FunctionComponent<Props> = ({pokemon, isEditForm}) => {
  
  const types: string[] = [
    'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
    'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
  ];

  //état des éléments initiaux du formulaire 
  const [form, setForm] = useState<Form>({
    picture: {value: pokemon.picture},
    name: {value: pokemon.name, isValid:true},
    hp: {value: pokemon.hp, isValid:true},
    cp: {value: pokemon.cp, isValid: true},
    types: {value: pokemon.types, isValid: true},
  });

  //redirection du submit
  const history = useHistory();

 //modifier les données deja enregistrer ( name, cp et hp )
 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const fieldName: string = e.target.name;
   const fieldValue: string = e.target.value;
   const newField: Field = {[fieldName]: { value: fieldValue }}
    //fusion des anciens champs avec les nouveaux
   setForm({...form, ...newField});
 }




  //selections types particulier au pokemon  ( appartient a un pokemon au non)
  const hasType = (type: string): boolean=> {
    return form.types.value.includes(type);
  }

 //MODIFIER LES DONNEES DEJA ENREGISTRE DU TYPE AVEC SELECTYPE
 const selectType = (type: string, e: React.ChangeEvent<HTMLInputElement>): void => {
       //case cochée ? 
       const checked = e.target.checked;
       let newField: Field;

  if(checked){
    // si le user coche une case
      const newTypes: string[] = form.types.value.concat([type]);
      newField = { value: newTypes };
  } else {
    // si le user décoche une case  
      const newTypes: string[] = form.types.value.filter((currentType:string) => currentType !== type );
       newField = {value: newTypes};
  }
    setForm({...form,...{ types: newField}});
 }

 //COMPORTEMENT DE SOUMISSION DU FORMULAIRE
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault(); //bloque le comportement natif 
  //  console.log(form);
  const isFormValid = validateForm(); //recuperation de la validation de nos champs 

  if(isFormValid) {
    pokemon.picture = form.picture.value; 
    pokemon.name = form.name.value;  // le ; important 
    pokemon.hp = form.hp.value;
    pokemon.cp = form.cp.value;
    pokemon.types = form.types.value;
    
    // si isEdit alors (?) update sinon (:) ajout
    isEditForm ? updatePokemon() : addPokemon();
    
    }
 }

//image accessible dans le cas d'un ajout
 const isAddForm = () => {
      return !isEditForm;
 }

 //RESTRICTION VALIDATION ( regexp )
 const validateForm = () => {
   let newForm: Form = form;

   //validation url image 
   if(isAddForm()){
     const start = "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
     const end = '.png';
                          //test des chaînes de caractere en préfixe ou suffixe
     if(!form.picture.value.startsWith(start) || !form.picture.value.endsWith(end)) {
       const errorMsg: string = "l'url n'est pas valide."
       const newField: Field= { value: form.picture.value, error: errorMsg, isValid:false};
       newForm = {...form,...{picture: newField} };
     } else {
      const newField: Field= { value: form.picture.value, error:'', isValid:true};
      newForm = {...form,...{picture: newField} };
     }
   }


   //validation du nom 
   if(!/^[a-zA-Zàéè ]{3,25}$/.test(form.name.value)) {
        const errorMsg: string = 'Le nom du pokémon est requis entre (1-25).';
        const newField: Field = { value: form.name.value, error: errorMsg, isValid:false};
        newForm = {...newForm,...{name: newField} };
   } else {
        const newField: Field = { value: form.name.value, error:'', isValid:true };
        newForm = {...newForm, ...{name: newField} };
      }
 
  //validation du hp
    if(!/^[0-9]{1,3}$/.test(form.hp.value)) {
        const errorMsg: string = 'les point de vie d\n un pokemon est compris entre 1 et 999.';
        const newField: Field = { value: form.hp.value, error: errorMsg, isValid:false};
        newForm = {...newForm, ...{hp: newField} };
  } else {
        const newField: Field = {value: form.hp.value, error:'', isValid:true};
        newForm= {...newForm, ...{hp: newField} };
     }

  //validation des cp 
  if(!/^[0-9]{1,2}$/.test(form.cp.value)) {
        const errorMsg: string ='les points de combats sont compris entre 0 et 99';
        const newField: Field = {value: form.cp.value, error: errorMsg, isValid:false };
        newForm = {...newForm, ...{cp: newField} };
  } else {
        const newField: Field = {value: form.cp.value, error:'', isValid:true};
        newForm = { ...newForm, ...{cp: newField}}
     }

     setForm(newForm);
     return newForm.name.isValid && newForm.hp.isValid && newForm.cp.isValid;
 }


 //validation des types ( limité a 3 types par pokemon )
  const isTypesValid = (type: string): boolean => {
    //moins de 1 case cochée impossible  
    if(form.types.value.length === 1 && hasType(type)) {
      return false;
    }
    if(form.types.value.length >= 3 && !hasType(type)){
      //plus de 3 impossible 
      return false;
    }
  return true;
  }

  //methode update et add pokemon ( mise en place dans pokemon service )

  const addPokemon = () => {
    PokemonService.addPokemon(pokemon).then(() => history.push('/pokemons'));
  }


  const updatePokemon = () => {
    PokemonService.updatePokemon(pokemon).then(() => history.push(`/pokemons/${pokemon.id}`));
  }


  //methode delete 
  const deletePokemon = () => {
    PokemonService.deletePokemon(pokemon).then(() => history.push('/pokemons'));
  }


  return (
    <form onSubmit={e=> handleSubmit(e)}>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable"> 
          {isEditForm && (
            <div className="card-image">
              <img src={pokemon.picture} alt={pokemon.name} style={{width: '250px', margin: '0 auto'}}/>
              <span className="btn-floating halfway-fab waves-effect waves-light">
                <li className="material-icons" onClick= {deletePokemon} >delete</li>
              </span>
            </div>
          )}
            <div className="card-stacked">
              <div className="card-content">
                
               
                   {/*POKEMON PICTURE */}
                   {isAddForm() && (
                     <div className="form-group">
                       <label htmlFor="name">Image</label>
                       <input id="picture" name="picture" type="text" className="form-control" value={form.picture.value} onChange={e=> handleInputChange(e)}></input>
                        {/* ERROR */}
                       { form.picture.error &&
                       <div className=' card-panel red accent-1'>
                         {form.picture.error}
                      </div>}
                     </div>
                   )}

                    {/* POKEMON NAME*/}
                    <div className="form-group">
                       <label htmlFor="name">Nom</label>                      
                       <input id="name" name="name" type="text" className="form-control" value={form.name.value} onChange={e=> handleInputChange(e)}></input>
                        {/* ERROR */}
                       { form.name.error &&
                          <div className=' card-panel red accent-1'>
                            {form.name.error}
                          </div>}
                    </div>

                   {/*POKEMON HP */}
                   <div className="form-group">
                      <label htmlFor="hp">Point de vie</label>
                      <input id="hp" name="hp" type="number" className="form-control" value={form.hp.value} onChange={e=> handleInputChange(e)}></input>
                      {/* ERROR */}
                      { form.hp.error &&
                         <div className="card-panel red accent-1">
                            {form.hp.error}
                         </div>}
                   </div>

                   {/* POKEMON CP  */}
                  <div className="form-group">
                     <label htmlFor="cp">Dégâts</label>
                     <input id="cp" name="cp" type="number" className="form-control" value={form.cp.value} onChange= {e=> handleInputChange(e)}></input>
                      {/* ERROR */}
                      { form.cp.error &&
                         <div className=" card-panel red accent-1">
                           {form.cp.error}
                         </div>}
                  </div>


                   {/* POKEMON TYPES*/}
                 <div className="form-group">
                     <label>Types</label>
                     {types.map(type => (
                     <div key={type} style={{marginBottom: '10px'}}>
                       <label>
                         <input id={type} name="types" type="checkbox" className="filled-in" value= {type} disabled={!isTypesValid(type)} checked={ hasType(type)} onChange= { e => selectType(type, e)} ></input>
                         <span>
                           <p className={formatType(type)}>{ type }</p>
                         </span>
                       </label>
                     </div>
                  ))}
                 </div>

              </div>

              <div className="card-action center">
                {/* Submit button */}
                <button type="submit" className="btn">Valider</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
   
export default PokemonForm;