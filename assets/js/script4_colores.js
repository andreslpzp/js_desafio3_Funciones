function pintarNegro (elemento){
    elemento.style.background = 'black'
}

const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const n3 = document.getElementById("n3")
const n4 = document.getElementById("n4")

n1.addEventListener("click", function(){pintarNegro(n1)})
n2.addEventListener("click", function(){pintarNegro(n2)})
n3.addEventListener("click", function(){pintarNegro(n3)})
n4.addEventListener("click", function(){pintarNegro(n4)})