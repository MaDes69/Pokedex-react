
// ts et non tsx car il n'y a pas de lien avec le DOM virtuel 

import react from 'react';

const formaDate = (date: Date): string => {
    //+1 pour que le moins de janvier commence pas 0 ainsi de suite 
return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
};

export default formaDate;