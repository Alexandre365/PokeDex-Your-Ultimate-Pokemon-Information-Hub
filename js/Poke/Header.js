// Função de color do Header
let  Name = (str) =>{
    return str[0].toUpperCase() + str.substr(1)
}
let IdNumero = (id) =>{
    if (id < 10) {
        return `00`+id
    }else if (id > 9 && id < 100 ) {
        return `0`+id
    }else{
        return id
    }
}
let  NubId = (id) =>{
    if (id.id < 10) {
        return `#00${id.id}`
    }else if (id.id > 10 && id.id < 100) {
        return `#0${id.id}`
    } else{
        return  `#${id.id}`
    }
}


export let headerColor = (id) =>{
    let Header = document.getElementById('header')
    Header.style.backgroundColor = `var(--${id.types[0].type.name})`
}

export let HeaderDados = (id) => {
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