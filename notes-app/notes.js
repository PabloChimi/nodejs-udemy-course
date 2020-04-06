const fs =  require('fs');
const chalk = require('chalk')

const getNotes = () => {'Your notes...'}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title == title )
    const duplicateNote = notes.find( note => note.title === title)
    
    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("Se agrego la nota correctamente")    
    } else {
        console.log("El titulo ya existe")
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON) 
}
const loadNotes = () => {
    try {   
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)   
    } catch (e) {
        return []
    }
}

const removeNote = function (title) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title == title)
    
    if (duplicateNotes.length != 0){
        const newNotes = notes.filter( note => note.title != title)
        saveNotes(newNotes)
        console.log("Se elimino " + title + " correctamente" )    
    } else {
        console.log("No se encontro el titulo")
    }
}

const listNotes = function () {
    const notes = loadNotes();
    
    notes.forEach(note => console.log(note.title));
}

const readNote = function (title) {
    const notes = loadNotes();

    const duplicateNote = notes.find( note => note.title === title);


    debugger
    
    if(duplicateNote) {
        console.log(chalk.green(duplicateNote.title));
        console.log(duplicateNote.body);
    } else {
        console.log(chalk.red("NOTE NO FOUND"));
    }
}
//exports a object with 2 properties
module.exports = { 
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}