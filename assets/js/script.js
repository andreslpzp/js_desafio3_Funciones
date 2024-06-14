function pintar(elemento, color){
    elemento.style.background = color;
    }

    const ele = document.getElementById("ele1")

    let clickCount = 0;

    ele.addEventListener("click", function() {
        clickCount++;
        if (clickCount === 1) {
            pintar(ele, 'green');
        } else if (clickCount === 2) {
            pintar(ele, 'yellow');
            clickCount = 0;
        }
    });