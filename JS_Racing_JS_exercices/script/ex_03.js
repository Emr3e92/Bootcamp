window.addEventListener(("load"), () => {
    const div = document.querySelector('footer div');
    div.addEventListener('click', function () {
        let name
        while (typeof (name) == "undefined") {
            name = prompt("What is your name ?");
            if (name != null && name != "" && window.confirm("Are you sure " + name + " is your name ?")) {
                div.innerText = "Hello " + name + " !"
            } else {
                name = undefined
            }
        }
    })
})