window.addEventListener(("load"), () => {
    const div = document.querySelector('footer div');
    div.addEventListener('click', function () {
        let name;
        do {
            do {
                name = prompt("What is your name ?");
                if (typeof (name) != "string") {
                    return;
                }
            } while (name == "");
        } while (!window.confirm("Are you sure " + name + " is your name ?"));
        div.innerText = "Hello " + name + " !";

    })
})