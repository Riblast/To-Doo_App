/*const formulario = document.getElementById("formulario")
const listaTareas = document.getElementById("lista-tareas")
const input = document.getElementById("input")
const template = document.getElementById("template").content

let noteContent;
let note = "Todavía no has creado una nota";
let noteSaves = [] */

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
}







/*
window.onload = startFunction;

function startFunction() {
        let start = prompt("Bienvenido, quiere crear una nueva nota o ver las últimas creadas?\n Para crear una nueva nota ingrese 1\n Para ver las últimas notas ingrese 2")
    if (parseInt(start) === 1) {
        newNote();
        startFunction();
    }
    else if (parseInt(start) === 2) {
        for (let index = 0; index < noteSaves.length; index++) {
            alert(noteSaves[index])
        }
        while (noteSaves = []) {
            alert(note);
            break;
        }
        startFunction();
    }
    else if(start === null){
        return;
    }
    else {
        alert("Ingrese un valor válido")
        startFunction();
    }
}

function newNote () {
    noteTitle = prompt("Ingrese el título de la nota");
    if (noteTitle === null){
        return;
    }
    else if (noteTitle == "") {
        alert("Ingrese algún título")
    }
    noteContent = prompt("Perfecto!, a continuación escriba el contenido de la nota")
    if (noteContent === null) {
        return;
    }
    while (noteTitle != "" && noteContent != "") {
        note = `${(noteTitle)} \n\n ${noteContent}`;
        alert("Su nota ha sido guardada con éxito: \n" + note)
        noteSaves.push(note)
        return;
    }
} */
