import React from 'react';
import GetPokemon_species from './GetDadoEvol';


 const Evol : React.FC<{i: number}> = ({i}) =>{


  if (i != 0) {
    GetPokemon_species(i)
  }




  return (
    <>

    </>
  );
}

export default Evol
