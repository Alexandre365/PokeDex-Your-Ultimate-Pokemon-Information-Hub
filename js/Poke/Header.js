// Função de color do Header
export let headerColor = (id) =>{
    let Header = document.getElementById('header')
    Header.style.backgroundColor = `var(--${id.types[0].type.name})`
}

