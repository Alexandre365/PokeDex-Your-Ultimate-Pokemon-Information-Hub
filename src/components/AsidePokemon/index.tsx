import React from 'react';
import { Container, BoxImg } from './style';

interface User {
  id: number;
  name: string;
  types: Array<any>;
  sprites:{front_default:string}
}

type UserArray = User[];

export const AsidePokemon : React.FC<{ Poke: UserArray, id: number }> = ({Poke, id}) =>{
  let _id = () => {return id -1}

  return (
    <Container>
      <BoxImg color={id != 0 ? `${Poke[_id()].types[0].type.name}` : `#ffffff0`}>
        {id}
        {id != 0 ? ` ${Poke[_id()].name}` : `s` }
      </BoxImg>
    </Container>
  );
}

