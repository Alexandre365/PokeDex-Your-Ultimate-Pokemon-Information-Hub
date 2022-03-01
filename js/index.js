import {Name,IdNumero,ListCard, ultimo} from './index/FuncoesIndex.js'

document.getElementById('btn-search').onclick = () =>{
    document.getElementById('search').style.display = 'inline'
    document.getElementById('btn-search').style.display = 'none'
}


const FetchPokemon = () =>{
    const getPokemonUrl= id => `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemonPromises = []

    for (let i = 1; i <= 898; i++){
        pokemonPromises.push(fetch(getPokemonUrl(i)).then(Response => Response.json()))
    }
        Promise.all(pokemonPromises)
        .then(pokemons => {
            const lisPokemons = pokemons.reduce((accumulator, pokemons)=>{
                accumulator += `
                <div class="Card" onclick="clr(${pokemons.id})">
                    <div class='Card-poke'>
                        <div class="card-poke-img">
                            <img src="${pokemons.sprites.front_default}" alt='Imagem do ${pokemons.id}'>
                        </div>
                        <div class="card-txt">
                            <h3>${Name(pokemons.name)}</h3>
                            <p>#${IdNumero(pokemons.id)}</p>
                        </div>
                    </div>
                </div>`
                return accumulator
            },'')
            document.getElementById('loading').style.display = 'none'
            const input = document.getElementById('search');
            input.addEventListener('input', updateValue);

            if(input.value == ''){
                document.getElementById('List-Card').innerHTML = lisPokemons
            }
            function updateValue(e) {
                ListCard(e,pokemons)
            }
        })   
}

FetchPokemon()
ultimo()