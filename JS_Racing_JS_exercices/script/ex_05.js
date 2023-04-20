window.addEventListener(("load"), () => {
    const btns = document.querySelector('footer div').querySelectorAll('button');
    const opts = document.querySelector('footer div').querySelector('select');
    const div = document.querySelector('footer div')
    const body = document.querySelector('body')

    let fSize = 16

    let btn0 = btns[0]
    let btn1 = btns[1]

    btn0.addEventListener('click', () => {
        fSize++
        body.style.fontSize = fSize + "px"
    })
    btn1.addEventListener('click', () => {
        if (fSize > 1) {
            fSize--
            body.style.fontSize = fSize + "px"
        }
    })
    opts.addEventListener('change', (event) => {
        let color = event.target.value
        div.style.backgroundColor = color
    })
})