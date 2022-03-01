export let EstaDeBase = id =>{
    statsHP(id)
    statsATK(id)
    statsDEF(id)
    statsSATK(id)
    statsSDEF(id)
    statsSPD(id)
    statsColor(id)
}

let statsColor = id =>{
    return `var(--${id.types[0].type.name})`

}

let NumPoke = id =>{
    return (id / 200)*100
}

let statsHP = id =>{
    document.getElementById('stats-HP-p').innerHTML = id.stats[0].base_stat
    document.getElementById('stats-HP-bar').style.width = `${NumPoke(id.stats[0].base_stat)}%`
    document.getElementById('stats-HP-bar').style.backgroundColor = statsColor(id)
}
let statsATK = id =>{
    document.getElementById('stats-ATK-p').innerHTML = id.stats[1].base_stat
    document.getElementById('stats-ATK-bar').style.width = `${NumPoke(id.stats[1].base_stat)}%`
    document.getElementById('stats-ATK-bar').style.backgroundColor = statsColor(id)
}
let statsDEF = id =>{
    document.getElementById('stats-DEF-p').innerHTML = id.stats[2].base_stat
    document.getElementById('stats-DEF-bar').style.width = `${NumPoke(id.stats[2].base_stat)}%`
    document.getElementById('stats-DEF-bar').style.backgroundColor = statsColor(id)
}
let statsSATK = id =>{
    document.getElementById('stats-SATK-p').innerHTML = id.stats[3].base_stat
    document.getElementById('stats-SATK-bar').style.width = `${NumPoke(id.stats[3].base_stat)}%`
    document.getElementById('stats-SATK-bar').style.backgroundColor = statsColor(id)
}
let statsSDEF = id =>{
    document.getElementById('stats-SDEF-p').innerHTML = id.stats[4].base_stat
    document.getElementById('stats-SDEF-bar').style.width = `${NumPoke(id.stats[4].base_stat)}%`
    document.getElementById('stats-SDEF-bar').style.backgroundColor = statsColor(id)
}
let statsSPD = id =>{
    document.getElementById('stats-SPD-p').innerHTML = id.stats[5].base_stat
    document.getElementById('stats-SPD-bar').style.width = `${NumPoke(id.stats[5].base_stat)}%`
    document.getElementById('stats-SPD-bar').style.backgroundColor = statsColor(id)
}
