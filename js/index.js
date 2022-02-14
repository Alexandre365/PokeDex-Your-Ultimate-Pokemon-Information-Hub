var Name = (str) =>{
    return str[0].toUpperCase() + str.substr(1)
}
var IdNumero = (id) =>{
    if (id < 10) {
        return `00`+id
    }else if (id > 9 && id < 100 ) {
        return `0`+id
    }else{
        return id
    }
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
                <button class="Card" onclick="clr(${pokemons.id})">
                    <div class='Card-poke'>
                        <div class="card-poke-img">
                            <img src="${pokemons.sprites.front_default}" >
                        </div>
                        <div class="card-txt">
                            <h2>${Name(pokemons.name)}</h2>
                            <p>#${IdNumero(pokemons.id)}</p>
                        </div>
                    </div>
                </button>`
                return accumulator
            },'')
            const input = document.getElementById('search');
            input.addEventListener('input', updateValue);

            if(input.value == ''){
                document.getElementById('List-Card').innerHTML = lisPokemons
            }
            function updateValue(e) {
                let list = pokemons.filter(function(id){
                    return id.name.indexOf(`${e.target.value}`.toLowerCase()) > -1
                })
                document.getElementById('List-Card').innerHTML = list.reduce((accumulator, pokemons)=>{
                    accumulator += `
                    <button class="Card" onclick="clr(${pokemons.id})">
                        <div class='Card-poke'>
                            <div class="card-poke-img">
                                <img src="${pokemons.sprites.front_default}" >
                            </div>
                            <div class="card-txt">
                                <h2>${Name(pokemons.name)}</h2>
                                <p>#${IdNumero(pokemons.id)}</p>
                            </div>
                        </div>
                    </button>`
                    return accumulator 
                   },'') 
            }
        })   
}

FetchPokemon()