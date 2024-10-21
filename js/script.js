console.log(document)
const $flexItem1 = document.getElementById(".flex-item")
const $a1 = document.querySelector("#a1")
const $body = document.querySelector("#cuerpo")
const $enviar = document.querySelector("#enviar")
function cambiarFondo() {
    $a1.style.backgroundColor = "yellow"
    $a1.classList.add("center")
    $flexItem1.classList.toggle("rotate")
    $body.classList.toggle("body")
}

$enviar.addEventListener("click",cambiarFondo)
