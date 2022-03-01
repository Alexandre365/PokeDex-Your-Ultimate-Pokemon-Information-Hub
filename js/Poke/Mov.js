export let Mov = id =>{
    let mov =  id.moves
    mov.reduce((accumulator, pokemons)=>{
        accumulator += mv(pokemons)
        return accumulator 
    },'') 
}

let mv = id =>{
    let mov = id.move.url
    fetch(mov)
    .then(Response => Response.json())
    .then((pokemon) =>{
       document.getElementById('Mov').innerHTML += `
        <div class='Card-mov'>
            <h3>${Name(pokemon.name)}</h3>
            <div class='center'>
                <div class='Card-mov-txt'>
                    <div><p><h4>Type:</h4>${nul(pokemon.type.name)}</p></div>
                    <div><p><h4>Power:</h4>${nul(pokemon.power)}</p></div>
                    <div><p><h4>PP:</h4>${nul(pokemon.pp)}</p></div>
                    <div><p><h4>Accuracy:</h4>${nul(pokemon.accuracy)}</p></div>
                </div>
            </div>
        </div>
        `
    })
}

let  Name = (str) =>{
    return str[0].toUpperCase() + str.substr(1)
}
let nul = id =>{
    if (id == null) {
        return ''
    } else {
        return id
    }
}
/*
<h4>type:<p>${pokemon.type.name}</p></h4>
                <h4>Power:<p>${pokemon.power}</p></h4>
                <h4>PP:<p>${pokemon.pp}</p></h4>
                <h4>Accuracy:<p>${pokemon.accuracy}</p></h4>*/