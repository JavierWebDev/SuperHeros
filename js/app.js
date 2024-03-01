let HeroesMarvel = []
let HeroesDC = []


fetch('../storage/marvel.json')
    .then(response => response.json())
    .then(data => {
        HeroesMarvel = data
        CrearTarjetasMarvel(data)
    })

fetch('../storage/dc.json')
    .then(response => response.json())
    .then(data => {
        HeroesDC = data
        CrearTarjetasDC(data)
    })

function CrearTarjetasMarvel(data) {
    const ContenedorHeroesMarvel = document.querySelector("#ContTarjetasMarvel")

    data.forEach(hero => {
        const clon = document.createElement("div")
        clon.classList.add("tarjeta")
        clon.id = "ContHeroCardMarvel"
        

        clon.innerHTML = `

        <h1 id="TxtTituloMarvel" class="cont-titulo">${hero.name}</h1>

        <div id="ContImgMarvel" class="cont-img_heroe"></div>

        <button class="cont-btn_visualizar" id="${hero.id}">VER</button> 

        `

        clon.querySelector("#ContImgMarvel").style.backgroundImage = `url('${hero.picture}')`
        ContenedorHeroesMarvel.append(clon)
    })
}

function CrearTarjetasDC(data) {
    const ContenedorHeroesDC = document.querySelector("#ContTarjetasDC")

    data.forEach(hero => {
        const clon = document.createElement("div")
        clon.classList.add("tarjeta")
        clon.id = "ContHeroCardDC"
        

        clon.innerHTML = `

        <h1 id="TxtTituloDC" class="cont-titulo">${hero.name}</h1>

        <div id="ContImgDC" class="cont-img_heroe"></div>

        <button class="cont-btn_visualizar" id="${hero.id}">VER</button> 

        `

        clon.querySelector("#ContImgDC").style.backgroundImage = `url('${hero.picture}')`
        ContenedorHeroesDC.append(clon)
    })
}

const Modal = document.querySelector("#ContModal")

function CloseModal() {
    Modal.style.display = "none"
}



