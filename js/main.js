const formulario = document.getElementById("formulario")
const listaTareas = document.getElementById("lista-tareas")
const input = document.getElementById("input")
const template = document.getElementById("template").content
const fragment = document.createDocumentFragment()
let tareas = {}

formulario.addEventListener("submit", e => {
    e.preventDefault()

    setTarea(e)
})

function setTarea(e){
    if(input.value.trim() === ""){
        return
    }
    const tarea = {
        id: Date.now(),
        texto: input.value,
        estado: false
    }
    tareas[tarea.id] = tarea
    formulario.reset()
    input.focus()
    imprimirTareas()
}

function imprimirTareas() {
    listaTareas.innerHTML = ""
    Object.values(tareas).forEach(tarea => {
        const clone = template.cloneNode(true)
        clone.querySelector("p").textContent = tarea.texto
        fragment.appendChild(clone)
    })
    listaTareas.appendChild(fragment)
}











/*
document.getElementById("btn").onclick = añadirNota;
parrafo = document.getElementById("parrafoNota")

function añadirNota() {
    const nota = document.getElementById("input").value;
    let nuevoTexto = document.createTextNode(nota)
    if (nota != "") {
        document.getElementById("parrafoNota").innerHTML = ""
        parrafo.appendChild(nuevoTexto)
        alert("Su nota ha sido guardada con éxito")
        return;
    }
    else {
        alert("Ingrese un valor válido")
    }
}*/