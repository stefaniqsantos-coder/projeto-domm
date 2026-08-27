//DICA: Normalmente colocamos os elementos capturados dentro de uma constante
const html = document.querySelector('html');

//BUTTONS
const  focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const botaoIniciar = document.querySelector('.app__card-primary-button')
const botoes = document.querySelectorAll('.app__card-button')
const startPauseBt = document.querySelector('#start-pause')
const comecarPausarBt = document.querySelector('#start-pause span')
const comecarPausarBtIcone = document.querySelector('.app__card-primary-butto-icon')

//CONTADOR - PARTE I
let tempoDecorrido = 1500 //em segundos
let intervaloId = null
const tempoNaTela = document.querySelector('#timer')

//AUDIOS
const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio ('/sons/luna-rise-part-one.mp3')
const audioPlay = new Audio ('/sons/play.wav')
const audioPause = new Audio ('/sons/pause.mp3')
const audioTempoFinalizado = new Audio ('/sons/beep.mp3')

musicaFocoInput.addEventListener('change', () =>{
    if(musica.paused){
        musica.play()
    }else{
        musica.pause()
    }
})

//HEADER
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')

//TIMER
const displayTimer = document.querySelector('#timer')

focoBt.addEventListener('click', () => {
    tempoDecorrido = 1500 // 25 minutos
    alterarContexto('foco');
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    tempoDecorrido = 300 //5 minutos
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    tempoDecorrido = 900 // 15 minutos
    alterarContexto('descanso-longo');
    longoBt.classList.add('active')
})

function alterarContexto(contexto){

    mostrarCronometro();

    botoes.forEach(function (botao){
    botao.classList.remove('active')
})

    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)

    switch(contexto){
        case "foco":
            titulo.innerHTML =
            `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;

        case "descanso-curto":
            titulo.innerHTML =
            `
            Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta.</strong>
            `
            break;

        case "descanso-longo":
            titulo.innerHTML =
            `
            Hora de voltar à superfície<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
            break;
    }
}

const contagemRegressiva = () => {
    if(tempoDecorrido <= 0){
        audioTempoFinalizado.play();
        zerar()//falta criar
        alert('Tempo FInalizado')
        return
    }
    tempoDecorrido -= 1
    mostrarCronometro()
    console.log('Temporizador: ' + tempoDecorrido)
}

startPauseBt.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar(){
    if(intervaloId){
        audioPause.play();
        zerar()
        return
    }
    audioPlay.play();
    comecarPausarBt.textContent = "Pausar"
    comecarPausarBtIcone.setAttribute('src', `/imagens/pause.png`)
    intervaloId = setInterval(contagemRegressiva, 1000)
}

function zerar(){
    clearInterval(intervaloId)
    intervaloId = null
    comecarPausarBt.textContent = "Começar"
    comecarPausarBtIcone.setAttribute('src', `/imagens/play_arrow.png`)
}

function mostrarCronometro(){
    const tempo = new Date(tempoDecorrido * 1000)
    const tempoFormat = tempo.toLocaleTimeString('pt-BR', {minute:'2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormat}`
}
mostrarCronometro();
