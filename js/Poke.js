import {headerColor} from './Poke/Header.js'
import {LocationPoke, JogosPoke, type, Name, NubId} from './Poke/SobrePoke.js'

document.getElementById('btnvoltar').onclick = () =>{
    location.href = 'index.html'
}

// Dados da Header 
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
                <img src="${id.sprites.front_default}" alt='Imagem do ${Name(id.name)}'>
            </div>   
    `
}
// Dados sobre o Pokémon
let Sobre = id => {
    document.getElementById('TxtSobre').innerHTML += `
    ${Name(id.name)} do tipo ${type(id)},
    `
    LocationPoke(id)
    setTimeout(() => {
        JogosPoke(id)
    }, 90);

}

//Renderizar dados da página  
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