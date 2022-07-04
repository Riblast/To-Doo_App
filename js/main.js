const formulario = document.getElementById("formulario")
const listaTareas = document.getElementById("lista-tareas")
const input = document.getElementById("input")
const template = document.getElementById("template").content
const fragment = document.createDocumentFragment()
const deleteAllBtn = document.getElementById("deleteAllBtn")
let tareas = {}

document.addEventListener("DOMContentLoaded", () =>{
    /* if (localStorage.getItem("tareas")) {
        tareas = JSON.parse(localStorage.getItem("tareas"))
    } */
    localStorage.getItem("tareas") && (tareas = JSON.parse(localStorage.getItem("tareas")))
    imprimirTareas()
})

formulario.addEventListener("submit", e => {
    e.preventDefault()
    setTarea()
})

listaTareas.addEventListener("click", e => {
    botonTarea(e)
})

deleteAllBtn.addEventListener("click", e => {
    eliminarTareas()
})
function setTarea(){
    if(input.value.trim() === ""){
        Toastify({
            text: "No has ingresado una nota",
            duration: 1500,
            close:true,
            style: {
                background: "linear-gradient(to right, #242038, #9067C6)",
            }
        }).showToast();
        return
    }
    else{
        Toastify({
            text: "Su nota se ingreso correctamente",
            duration: 1500,
            close: true,
            style: {
                background: "linear-gradient(to right, #242038, #9067C6)",
            }
        }).showToast();
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

    localStorage.setItem("tareas", JSON.stringify(tareas))

    if (Object.values(tareas).length === 0) {
        listaTareas.innerHTML = `
        <div id="tarea" class="select-none bg-c1 rounded-md place-content-between flex items-center  p-1 min-h-8 mx-1 my-2">
            <p id="parrafoNota">Todavía no has creado una nota...</p>
        </div>`
        return
    }

    listaTareas.innerHTML = ""
    Object.values(tareas).forEach(tarea => {
        const clone = template.cloneNode(true)
        clone.querySelector("p").textContent = tarea.texto

        if(tarea.estado === true) {
            clone.querySelectorAll(".fa-regular")[0].classList.replace("fa-square", "fa-square-check")
            clone.getElementById("tarea").classList.replace("bg-c1", "bg-v2")
            clone.querySelector("p").style.textDecoration = "line-through"
        }
        clone.querySelectorAll(".fa-regular")[0].dataset.id = tarea.id
        clone.querySelectorAll(".fa-regular")[1].dataset.id = tarea.id
        fragment.appendChild(clone)
    })
    listaTareas.appendChild(fragment)
}

function botonTarea(e) {
    if(e.target.classList.contains("fa-trash-can") === true) {
        delete tareas[e.target.dataset.id]
        imprimirTareas()
    }

    if(e.target.classList.contains("fa-square") === true) {
        tareas[e.target.dataset.id].estado = true
        imprimirTareas()
    }

    if(e.target.classList.contains("fa-square-check") === true) {
        tareas[e.target.dataset.id].estado = false
        imprimirTareas()
    }

    e.stopPropagation()
}
function eliminarTareas(){
    listaTareas.innerHTML = `
    <div id="tarea" class="select-none bg-c1 rounded-md place-content-between flex items-center  p-1 min-h-8 mx-1 my-2">
        <p id="parrafoNota">Todavía no has creado una nota...</p>
    </div>`
    tareas = {}
    localStorage.setItem("tareas", JSON.stringify(tareas))
    Toastify({
        text: "Las tareas se han eliminado correctamente",
        duration: 1500,
        close:true,
        style: {
            background: "linear-gradient(to right, #242038, #9067C6)",
        }
    }).showToast();
}