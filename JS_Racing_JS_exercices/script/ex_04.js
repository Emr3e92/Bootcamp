window.addEventListener(("load"), () => {
    const div = document.querySelector('footer div');
    let char = ""
    window.addEventListener('keydown', (event) => {
        let refEventKey = event.key
        if (refEventKey.length == 1) {
            char += refEventKey
            div.innerText = char.slice(-42)
        }
    })
})