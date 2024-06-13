function pintar(elemento, color){
    elemento.style.background = color;
    }

    const ele = document.getElementById("ele1")

    ele.style.backgroundColor = 'green';
    ele.addEventListener("click", function(){pintar(ele, 'yellow')})