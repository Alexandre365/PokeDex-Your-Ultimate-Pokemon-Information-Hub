import React from 'react';
import { Container, BoxImg, BoxImgTxt, IdPoke, Box, CardTyps, Type, Status, Stat, Evolutions } from './style';
import Evol from './Evolutions';

interface User {
  id: number;
  name: string;
  types: Array<any>;
  stats: Array<any>;
  species: {name:string};
  game_indices:Array<any>;
  sprites:{front_default:string}
}

const idPoke = (id:number) =>{
  if (id < 10) {
    return `#00${id}`
  }
  if (id < 100) {
    return `#0${id}`
  }
  if (id > 100) {
    return `#${id}`
  }
}



export const AsidePokemon : React.FC<{ Poke: User, id: number, Aside: Function }> = ({Poke, id, Aside}) =>{

  const  Uppercase = (str: string | any[]) =>{
    return str[0].toUpperCase() + str.slice(1)
  }


  return (

    <Container>
      <span onClick={() => Aside('50rem')}>X</span>
      <BoxImg color={id != 0 ? `${Poke.types[0].type.name}` : `#fffffff`}>
        <BoxImgTxt>
          <IdPoke>
            {idPoke(id)}
          </IdPoke>
          <h3>{Uppercase(Poke != undefined ? Poke.name : 'undefined')}</h3>
        </BoxImgTxt>
        <img src={id != 0 ? `${Poke.sprites.front_default}` : ``} alt="" />
      </BoxImg>
      <Box>
        <CardTyps>
          {Poke != undefined ? Poke.types.map((i,index)=> (
            <Type key={index} color={Poke != undefined ? `${Poke.types[index].type.name}` : `#fffffff`}>{Uppercase(i.type.name)}</Type>
          )): `undefined`}
        </CardTyps>
        {Poke != undefined ? (
          <p>{Uppercase(Poke != undefined ? Poke.name : 'undefined')} é um Pokémon da espécie "{Uppercase(Poke != undefined ? Poke.species.name : 'undefined')}" que pode ser encontrado nos jogos:"{Poke != undefined ? Poke.game_indices.map((i)=> ` ${Uppercase(i.version.name)},`) : 'undefined'}". Ele é do tipo "{Uppercase(Poke != undefined ? Poke.types[0].type.name : 'undefined')}" e é conhecido por suas habilidades únicas e características cativantes.</p>
        ) : (
          <p></p>
        )}

        <Status>
          <Stat color={id != 0 ? `${Poke.types[0].type.name}` : `#fffffff`}>
            <h4>HP</h4>
            <p>{Poke != undefined ? Poke.stats[0].base_stat : '0'}</p>
          </Stat>
          <Stat color={id != 0 ? `${Poke.types[0].type.name}` : `#fffffff`}>
            <h4>ATK</h4>
            <p>{Poke != undefined ? Poke.stats[1].base_stat : '0'}</p>
          </Stat>
          <Stat color={id != 0 ? `${Poke.types[0].type.name}` : `#fffffff`}>
            <h4>DEF</h4>
            <p>{Poke != undefined ? Poke.stats[2].base_stat : '0'}</p>
          </Stat>
          <Stat color={id != 0 ? `${Poke.types[0].type.name}` : `#fffffff`}>
            <h4>SpA</h4>
            <p>{Poke != undefined ? Poke.stats[3].base_stat : '0'}</p>
          </Stat>
          <Stat color={id != 0 ? `${Poke.types[0].type.name}` : `#fffffff`}>
            <h4>SpD</h4>
            <p>{Poke != undefined ? Poke.stats[4].base_stat : '0'}</p>
          </Stat>
          <Stat color={id != 0 ? `${Poke.types[0].type.name}` : `#fffffff`}>
            <h4>SPD</h4>
            <p>{Poke != undefined ? Poke.stats[5].base_stat : '0'}</p>
          </Stat>
        </Status>
        <Evolutions>
          <h3>EVOLUTIONS</h3>
          <Evol i={id} />
        </Evolutions>
      </Box>
    </Container>
  );
}

