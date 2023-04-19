window.addEventListener(("load"), () => {
    const div = document.querySelector('footer div');
    div.addEventListener('click', function () {
        let text
        let name = prompt("What is your name?")
        if (name == NULL || name == "") {
            prompt("What is your name?")
        } else {
            text = "Are you sure " + name + " is your name ?"
        }
        div.innerHTML = text
    })
})