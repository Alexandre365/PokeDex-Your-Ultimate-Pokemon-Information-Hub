import { config } from '../../../server/axios';

async function getSprites(_i: string) {
  try {
    const pokemon = await config.get(_i)
    const Sprites = await config.get(pokemon.data.varieties[0].pokemon.url)

    return Sprites.data.sprites
  } catch(err){
    return null
  }
}

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

async function getEvolutionChain(i: string,id: number) {
  try {
    const response = await config.get(i);
    const evolutionChainData = {
      id: id,
      Evol_1: {
        name: response.data.chain.species.name,
        Level: 0,
        url: response.data.chain.species.url,
        sprites: await getSprites(response.data.chain.species.url)
      },
      Evol_2:{
        name: response.data.chain.evolves_to[0].species.name,
        Level:response.data.chain.evolves_to[0].evolution_details[0].min_level,
        url: response.data.chain.evolves_to[0].species.url,
        sprites: await getSprites(response.data.chain.evolves_to[0].species.url)
      },
      Evol_3:{
        name: response.data.chain.evolves_to[0].evolves_to.length != 0 ? response.data.chain.evolves_to[0].evolves_to[0].species.name : '',
        Level:response.data.chain.evolves_to[0].evolves_to.length != 0 ? response.data.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level : '',
        url: response.data.chain.evolves_to[0].evolves_to.length != 0 ? response.data.chain.evolves_to[0].evolves_to[0].species.url : '',
        sprites: response.data.chain.evolves_to[0].evolves_to.length != 0 ? await getSprites(response.data.chain.evolves_to[0].evolves_to[0].species.url) : ''
      }
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
      const evolutionChainData = await getEvolutionChain(evolutionChainUrl, i);
      return evolutionChainData
    }
  } catch (error) {
    console.error('Erro ao obter URL e dados da cadeia de evolução do Pokémon:', error);
  }
}

async function Get_UrlEvol(i: number) {
  try {
    const evolutionChainUrl = await getUrlAndEvolChain(i);
    return evolutionChainUrl
  } catch (error) {

  }

}

export default Get_UrlEvol;
