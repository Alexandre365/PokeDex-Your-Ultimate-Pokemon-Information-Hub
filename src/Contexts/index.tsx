import React, { createContext, useEffect, useState } from 'react';
import { config } from '../server/axios';

type Data = {
  children: React.ReactNode;
};

type DataContextProps = {
  poke: PokeProps;
  Load: () => void;
};

type PokeProps = Array<any>;

const DataContext = createContext<DataContextProps>({} as DataContextProps);

const PokeDataProvider = ({ children }: Data) => {
  const [poke, setPoke] = useState<PokeProps>([]);

  const Load = async () => {
    try {
      let promises = [];
      for (let index = 1; index <= 50; index++) {
        promises.push(config.get(`pokemon/${index}`).then((response) => response.data));
      }

      const results = await Promise.all(promises);
      setPoke(results);
    } catch (error) {
      console.error('Erro ao carregar dados dos Pokémon:', error);
    }
  };

  useEffect(() => {
    Load();
  }, []);

  return (
    <DataContext.Provider
      value={{
        poke,
        Load,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { PokeDataProvider, DataContext };
