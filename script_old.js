//Dica: normalmente colocamos os elementos capturados dentro de ums constante
const html = document.querySelector('html');
//BUTTONS
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const botaoIniciar = document.querySelector('.app__card-primary-button')

//HEADER
const titulo = document.querySelector('.app__title')
const banner = document.querySelector('.app__image')

//TIMER
const displayTempo = document.querySelector('#timer')

//CRIAR DOS OUVINTES DE EVENTOS
focoBt.addEventListener('click',() => {
    html.setAttribute('data-contexto','foco')
    banner.setAttribute('src', '/imagens/foco.png')
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    banner.setAttribute('src', '/imagens/descanso-curto.png')
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto','descanso-longo' )
    banner.setAttribute('src', '/imagens/descanso-longo.png')
})





