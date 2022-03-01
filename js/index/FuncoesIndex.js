export let  Name = (str) =>{
    return str[0].toUpperCase() + str.substr(1)
}
export let IdNumero = (id) =>{
    if (id < 10) {
        return `00`+id
    }else if (id > 9 && id < 100 ) {
        return `0`+id
    }else{
        return id
    }
}
export let ListCard = (e,pokemons) =>{
    let list = pokemons.filter(function(id){
        return id.name.indexOf(`${e.target.value}`.toLowerCase()) > -1
    })
    document.getElementById('List-Card').innerHTML = list.reduce((accumulator, pokemons)=>{
        accumulator += `
        <div class="Card" onclick="clr(${pokemons.id})">
            <div class='Card-poke'>
                <div class="card-poke-img">
                    <img src="${pokemons.sprites.front_default}" >
                </div>
                <div class="card-txt">
                    <h2>${Name(pokemons.name)}</h2>
                    <p>#${IdNumero(pokemons.id)}</p>
                </div>
            </div>
        </div>`
        return accumulator 
       },'') 
       
}

export let ultimo = () =>{
    let id = `https://pokeapi.co/api/v2/pokemon/${localStorage.getItem('IdPoke')}`
    fetch(id)
    .then(Response => Response.json())
    .then((pokemon)=>{
        document.getElementById('ultimo').innerHTML = `
        <div class="Card Card-max1000" onclick="clr(${pokemon.id})">
                    <div class='Card-poke'>
                        <div class="card-poke-img">
                            <img src="${pokemon.sprites.front_default}" alt='Imagem do ${pokemon.id}'>
                        </div>
                        <div class="card-txt">
                            <h3>${Name(pokemon.name)}</h3>
                            <p>#${IdNumero(pokemon.id)}</p>
                        </div>
                    </div>
                </div>
        
        `
    })
    
}