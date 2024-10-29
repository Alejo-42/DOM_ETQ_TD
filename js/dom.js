const $sitioetq = document.querySelector("#sitio-etq")
const $parrafo = document.querySelector(".p")
const $addP = document.querySelector(".add-p")

const $flexSect = document.querySelector(".flex-section")

function addParrafo() {
    let p2 = document.createElement("p")
    
    let infoP = document.createTextNode("Hola")
    p2.appendChild(infoP)

    p2.setAttribute("class","parrafo2")
    $flexSect.appendChild(p2)
    $flexSect2.appendChild(ul)
}    
    $addP.addEventListener("click",addParrafo)

let dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]
let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

const $flexSect2 = document.querySelector(".flex-section2")

let ul = document.createElement("ul")


dias.forEach(item =>{
    let li = document.createElement("li")
    li.textContent = item
    ul.appendChild(li)
})