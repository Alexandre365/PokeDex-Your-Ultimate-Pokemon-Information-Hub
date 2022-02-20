document.getElementById('btnvoltar').onclick = () =>{
    location.href = 'index.html'
}
let headerColor = (id) =>{
    let Header = document.getElementById('header')
    Header.style.backgroundColor = `var(--${id.types[0].type.name})`
}
var Name = (str) =>{
    return str[0].toUpperCase() + str.substr(1)
}
function NubId(id) {
    if (id.id < 10) {
        return `#00${id.id}`
    }else if (id.id > 10 && id.id < 100) {
        return `#0${id.id}`
    } else{
        return  `#${id.id}`
    }
}
let card_type = (id) => {
    if (id.types.length == 1) {
        return `${Name(id.types[0].type.name)}
        `
    }else{
        return `
        ${Name(id.types[0].type.name)} e ${Name(id.types[1].type.name)}`
    }
}
let HeaderDados = (id) => {
    document.getElementById('HeaderDados').innerHTML = `
            <div class="DadosTitle">
                <div>
                    <h2>${Name(id.name)}</h2>
                </div>
                <div>
                    <p>${NubId(id)}<p/>
                </div>
            </div>
            <div class="DadosImg">
                <img src="${id.sprites.front_default}">
            </div>   
    `
}

let LocationPoke = (id) =>{
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
let JogosPoke = (id) =>{
    document.getElementById('TxtSobre').innerHTML += ` está disponivel nos jogos: 
    ${id.game_indices.reduce((accumulator, pokemons)=>{
        accumulator += ` ${pokemons.version.name},`
        return accumulator
    },'')}
    `
}

let Sobre = id => {
    document.getElementById('TxtSobre').innerHTML += `
    ${Name(id.name)} do tipo ${card_type(id)},
    `
    LocationPoke(id)
    setTimeout(() => {
        JogosPoke(id)
    }, 90);

}
let chargePoke = () =>{
    let id = `https://pokeapi.co/api/v2/pokemon/${localStorage.getItem('IdPoke')}`
    fetch(id)
    .then(Response => Response.json())
    .then((pokemon) =>{
        console.clear()
        console.log(pokemon)
        headerColor(pokemon)
        HeaderDados(pokemon)
        Sobre(pokemon)
    })
    .then((erro) =>{
        console.log("Erro:" + erro)
    })
}

chargePoke()