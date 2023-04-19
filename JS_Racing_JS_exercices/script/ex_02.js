window.addEventListener(("load"), () => {
    var count = 0
    const button = document.querySelector("footer div");
    var countDisplay = document.querySelector("footer div");
    button.addEventListener('click', function () {
        count++;
        countDisplay.innerHTML = count;
    })
})