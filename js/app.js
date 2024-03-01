let HeroesMarvel = []
let HeroesDC = []


fetch('/../storage/marvel.json')
    .then(response => response.json())
    .then(data => {
        HeroesMarvel = data
        CrearTarjetasMarvel(data)
    })

fetch('/../storage/dc.json')
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

const MostrarMarvel = document.querySelector("#SectionMarvel")
const MostrarDC = document.querySelector("#SectionDC")

function Mostrar() {
    MostrarMarvel.style.display = "block"
    MostrarDC.style.display = "block"
}

function MostrarMarvelSec() {
    MostrarMarvel.style.display = "block"
    MostrarDC.style.display = "none"
}


function MostrarDCSec() {
    MostrarMarvel.style.display = "none"
    MostrarDC.style.display = "block"
}

const searchBar = document.getElementById('SearchInput');

searchBar.addEventListener('input', function() {
    const searchText = searchBar.value.toLowerCase(); 

    const marvelHeroes = document.querySelectorAll('#ContTarjetasMarvel .tarjeta');
    const dcHeroes = document.querySelectorAll('#ContTarjetasDC .tarjeta');
    const titulos = document.querySelectorAll('.titulo_main')

    marvelHeroes.forEach(hero => {
        const heroName = hero.querySelector('.cont-titulo').textContent.toLowerCase();
        if (heroName.includes(searchText)) {
            hero.style.display = 'block'; 
        } else {
            hero.style.display = 'none';
        }
    });

    dcHeroes.forEach(hero => {
        const heroName = hero.querySelector('.cont-titulo').textContent.toLowerCase();
        if (heroName.includes(searchText)) {
            hero.style.display = 'block';
        } else {
            hero.style.display = 'none';
        }
    });
});