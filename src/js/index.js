const modalDoTrailer = document.querySelector('.modal')
const botaoAbrirTrailer = document.querySelector('.botao-trailer')
const botaoFecharTrailer = document.querySelector('.fechar-modal')
const video = document.getElementById('video')
const linkVideo = video.src

function aternarModal(){
    modalDoTrailer.classList.toggle('aberto')
}

    botaoAbrirTrailer.addEventListener('click', () => {
    aternarModal()
    video.setAttribute('src', linkVideo)
} )

botaoFecharTrailer.addEventListener('click', () => {
    aternarModal()
    video.setAttribute('src','')
})
