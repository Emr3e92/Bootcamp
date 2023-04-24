window.addEventListener("load", () => {
    const canvas = document.querySelector('canvas')
    const btns = document.querySelectorAll('button')
    const aud = new Audio('triangle.ogg')
    const context = canvas.getContext('2d')

    context.beginPath()
    context.moveTo(6, 6)
    context.lineTo(14, 10)
    context.lineTo(6, 14)
    context.fillStyle = "orange"
    context.fill()
    context.closePath()
    context.stroke()

    let btnsPause = btns[0]
    let btnsStop = btns[1]
    let btnsMute = btns[2]

    canvas.addEventListener('click', () => {
        aud.play()
    })

    btnsPause.addEventListener('click', () => {
        aud.pause()
    })

    btnsStop.addEventListener('click', () => {
        aud.pause()
        aud.currentTime = 0
    })

    btnsMute.addEventListener('click', () => {
        if (aud.volume > 0) {
            aud.volume = 0
        }
        else {
            aud.volume = 1
        }
    })
})
