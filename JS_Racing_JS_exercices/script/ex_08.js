window.addEventListener("load", () => {
    const canvas = document.querySelectorAll('footer div canvas')

    let or_count = 0 // Couleur Or
    let vi_count = 0 // Couleur Violette
    let ol_count = 0 // Couleur Olive
    let no_count = 0 // Couleur Noir

    for (let index = 0; index < canvas.length; index++) {
        canvas[index].style.pointerEvents = "none";
    }

    for (let i = 0; i < canvas.length; i++) {
        let style = window.getComputedStyle(canvas[i])
        let attributeValue = style.getPropertyValue("background-color")
        switch (attributeValue) {
            case "rgb(255, 165, 0)":
                or_count++;
                break;
            case "rgb(0, 0, 0)":
                no_count++;
                break;
            case "rgb(128, 0, 128)":
                vi_count++;
                break;
            case "rgb(128, 128, 0)":
                ol_count++;
                break;
        }
    }
    let innerIndex = 0;
    let colorPicker = (index, color) => {
        for (let j = 0; j < index; j++) {
            canvas[innerIndex].style.backgroundColor = color
            innerIndex++
        }
    }

    colorPicker(or_count, "orange")
    colorPicker(vi_count, "purple")
    colorPicker(no_count, "black")
    colorPicker(ol_count, "olive")
})