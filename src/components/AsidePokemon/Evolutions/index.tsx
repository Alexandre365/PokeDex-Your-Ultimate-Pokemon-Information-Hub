import React, { useState, useEffect } from 'react';
import Get_UrlEvol from './GetDadoEvol';
import * as Sty from './style'

type evo = {
  id: number,
  Evol_1: {
    name: string;
    Level: number;
    url: string;
    sprites: {
      front_default:string,
    };
  };
  Evol_2: {
    name: string;
    Level: number;
    url: string;
    sprites: {
      front_default:string,
    };
  };
  Evol_3: {
    name: string;
    Level: string;
    url: string;
    sprites: {
      front_default:string,
    };
  };
} | null | undefined


const Evol : React.FC<{i: number, col: string}> = ({i, col}) =>{
  const [evoData, setEvoDate] = useState<evo>();

  const  Uppercase = (str: string | any[]) =>{
    return str[0].toUpperCase() + str.slice(1)
  }

  useEffect(()=>{
    const Result =async () => {
      const data = await Get_UrlEvol(i)
      setEvoDate(data)
      console.log(data)
    }
    Result()
  },[i])

  if (evoData?.id == i) {
    return (
      <Sty.Container>
        <Sty.Lvl>
         {
          evoData?.Evol_3.Level != '' ? (
            <div>
              <p>LVL: {evoData?.Evol_2.Level}</p>
              <p>LVL: {evoData?.Evol_3.Level}</p>
            </div>
          ):(
            <p>LVL: {evoData?.Evol_2.Level}</p>
          )
         }
        </Sty.Lvl>
        <Sty.Pokes>
          <Sty.Box color={col}>
            <img src={evoData?.Evol_1.sprites.front_default}></img>
            <h3>{Uppercase(evoData?.Evol_1.name)}</h3>
          </Sty.Box>
          <Sty.Box color={col}>
            <img src={evoData?.Evol_2.sprites.front_default}></img>
            <h3>{Uppercase(evoData?.Evol_2.name)}</h3>
          </Sty.Box>
          {evoData?.Evol_3.name != '' ? (
            <Sty.Box color={col}>
            <img src={evoData?.Evol_3.sprites.front_default}></img>
            <h3>{Uppercase(evoData?.Evol_3.name)}</h3>
          </Sty.Box>
          ):(
            <div>
            </div>
          )}
        </Sty.Pokes>
      </Sty.Container>
    );
  }else{
    return (
      <Sty.Container>
        <Sty.Loading color={col}/>
      </Sty.Container>
    );
  }
}

export default Evol
