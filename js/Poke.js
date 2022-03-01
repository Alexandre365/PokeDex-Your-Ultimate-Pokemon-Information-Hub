import {headerColor, HeaderDados} from './Poke/Header.js'
import {Sobre} from './Poke/SobrePoke.js'
import {EstaDeBase} from './Poke/EstaDeBAse.js'
import {Mov} from './Poke/Mov.js'

document.getElementById('btnvoltar').onclick = () =>{
    location.href = 'index.html'
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
        EstaDeBase(pokemon)
        Mov(pokemon)
    })
    .then((erro) =>{
        console.log("Erro:" + erro)
    })
}

chargePoke()