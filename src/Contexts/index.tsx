import React, { createContext, useState } from 'react';
import { config } from '../server/axios';

type Data = {
  children: React.ReactNode
}
type DataContextProps = {
  poke: PokeProps,
  Load: () => void
}

type PokeProps = Array<any>

const DataContext = createContext<DataContextProps>({} as DataContextProps)

const PokeDataProvider = ({children}: Data ) =>{
  const [poke, setPoke] = useState<PokeProps>([])


  const Load = async () =>{
    let ary: any[] = []
    for (let index = 1; index <= 150; index++) {
      await config.get(`pokemon/${index}`)
      .then((response) =>{
        ary.push(response.data)
      })
    }
    setPoke(ary)
  }



  return(
    <DataContext.Provider value={{
      poke,
      Load
    }}>
      {children}
    </DataContext.Provider>
  )
}

export { PokeDataProvider, DataContext }
