import React, { useEffect, useState } from 'react';
import { config } from '../../../server/axios';

async function getEvolutionChainUrl(i: number) {
  try {
    const response = await config.get(`pokemon-species/${i}`);
    const evolutionChainUrl = response.data.evolution_chain.url;
    return evolutionChainUrl;
  } catch (error) {
    console.error('Erro ao obter URL da cadeia de evolução do Pokémon:', error);
    return '';
  }
}

async function getEvolutionChain(i: string) {
  try {
    const response = await config.get(i);
    const evolutionChainData = {
      Evol_1: {
        name: response.data.chain.species.name,
        url: response.data.chain.species.url,
      },
    };
    return evolutionChainData;
  } catch (error) {
    console.error('Erro ao obter dados da cadeia de evolução do Pokémon:', error);
    return null;
  }
}

const getUrlAndEvolChain = async (i: number) => {
  try {
    const evolutionChainUrl = await getEvolutionChainUrl(i);

    if (evolutionChainUrl) {
      const evolutionChainData = await getEvolutionChain(evolutionChainUrl);
      console.log(evolutionChainData)
    }
  } catch (error) {
    console.error('Erro ao obter URL e dados da cadeia de evolução do Pokémon:', error);
  }
};

const Get_UrlEvol = (i: number) => {
  useEffect(() => {
    getUrlAndEvolChain(i);
  }, [i]);

  // Se necessário, renderize ou faça algo aqui com os resultados.
};

export default Get_UrlEvol;


