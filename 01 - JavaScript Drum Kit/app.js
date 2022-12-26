

window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)


    if (!audio) return // Stops the function

    audio.currentTime = 0
    audio.play()

    key.classList.add('active')

    setTimeout(() => {
        key.classList.remove('active')
    },100)
})