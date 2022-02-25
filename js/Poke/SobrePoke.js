// Funcões Gerais 
//função de UpperCase
export let  Name = (str) =>{
    return str[0].toUpperCase() + str.substr(1)
}

//Função do id do pokémon
export let  NubId = (id) =>{
    if (id.id < 10) {
        return `#00${id.id}`
    }else if (id.id > 10 && id.id < 100) {
        return `#0${id.id}`
    } else{
        return  `#${id.id}`
    }
}

// função de type
export let type = (id) => {
    if (id.types.length == 1) {
        return `${Name(id.types[0].type.name)}
        `
    }else{
        return `
        ${Name(id.types[0].type.name)} e ${Name(id.types[1].type.name)}`
    }
}



//localização do pokemon
export let LocationPoke = (id) =>{
    let Locat = `${id.location_area_encounters}`
    fetch(Locat)
    .then(Response => Response.json())
    .then((localizacao) =>{
        console.log(localizacao.length)
        if (localizacao.length == 0) {
            document.getElementById('TxtSobre').innerHTML += ''
        } else {
            document.getElementById('TxtSobre').innerHTML += `é encontrado em  ${
                localizacao.reduce((accumulator, pokemons)=>{
                    accumulator += ` ${Name(pokemons.location_area.name)},`
                    return accumulator
                },'')
            }`
        }
        
    }) 
}

// Jogos onde encontramos os pokémon
export let JogosPoke = (id) =>{
    document.getElementById('TxtSobre').innerHTML += ` está disponivel nos jogos: 
    ${id.game_indices.reduce((accumulator, pokemons)=>{
        accumulator += ` ${pokemons.version.name},`
        return accumulator
    },'')}
    `
}