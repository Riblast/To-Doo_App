
let noteTitle;
let noteContent;
let note = "Todavía no has creado una nota";

window.onload = startFunction;

function startFunction() {
        let start = prompt("Bienvenido, quiere crear una nueva nota o ver la última creada?\n Para crear una nueva nota ingrese 1\n Para ver la última nota ingrese 2")
    if (parseInt(start) === 1) {
        newNote();
        startFunction();
    }
    else if (parseInt(start) === 2) {
        alert(note)
        startFunction();
    }
    else if (start === null) {
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
        return ;
    }
}