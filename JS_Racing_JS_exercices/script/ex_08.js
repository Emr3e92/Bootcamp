window.addEventListener("load", () => {
    const canvas = document.querySelector('canvas')
    ctx = canvas.getContext('2d')

    ctx.beginPath();
    ctx.rect(0, 0, 320, 160);
    ctx.fill();
    ctx.closePath();
})