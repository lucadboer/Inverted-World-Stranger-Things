import { subscribeToHellfireClub } from './FireBase/hellfire-club.js';

const btnInventerMundos = document.querySelector('#switch-theme-button')
const formDeD = document.querySelector('#form-DeD')
const music = document.querySelector('#music')

const txtName = document.querySelector('#txtName')
const txtEmail = document.querySelector('#txtEmail')
const txtLevel = document.querySelector('#txtLevel')
const txtCharacter = document.querySelector('#txtCharacter')
const btnSubscribe = document.querySelector('#btnSubscribe')

window.addEventListener('load', playMusic)

function playMusic() {
    const theme = document.body.classList[0]
    const musicTheme = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg'

    music.src = `assets/musics/${musicTheme}`
    music.play()
    music.volume = 0.2
}

btnInventerMundos.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
    document.body.classList.toggle('light-theme')

    playMusic()

})

btnSubscribe.addEventListener('click', enviarFormulario)

function enviarFormulario() {
    const subscribes = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    formDeD.addEventListener('submit', async (e) => {
        e.preventDefault()
        subscribeToHellfireClub(subscribes) 
        swal("Player cadastrado!", "", "success")
        .then(() => {
            txtName.value = ''
            txtEmail.value = ''
            txtLevel.value = ''
            txtCharacter.value = ''
        })
    })
}

