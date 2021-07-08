import React, { useState, useEffect } from 'react'

const NotesContext = React.createContext({
    notes: [],
    addNote: (note) => { },
    removeNote: (id) => { },
    editNote: (id, content) => { }
})

export const NotesProvider = props => {

    const [noteList, setNoteList] = useState([])

    //getting notes from localstorage and setting context
    useEffect(() => {
        let index = 0
        let savedNotes = []
        Object.keys(localStorage).forEach((key) => {
            const keyName = localStorage.key(index)
            const note = JSON.parse(localStorage.getItem(key))

            if (keyName.includes('note_')) {
                savedNotes = [note, ...savedNotes]
            }
            index++
        });
        savedNotes.sort((a, b) => b.id - a.id)
        setNoteList(savedNotes)
    }, [])

    const addNoteHandler = note => {
        setNoteList((prev) => {
            return [{
                id: note.id,
                date: note.date,
                content: note.content
            }, ...prev]
        })
        localStorage.setItem(`note_${note.id}`, JSON.stringify(note))
    }

    const removeNoteHandler = id => {
        setNoteList((prev) => {
            const updatedList = prev.filter(note => note.id !== id);
            return updatedList;
        })
        localStorage.removeItem(`note_${id}`)
    }

    const editNoteHandler = (id, content) => {
        const index = noteList.findIndex(obj => obj.id === id)
        setNoteList(() => {
            noteList[index].content = content
            return [...noteList]
        })
        localStorage.setItem(`note_${id}`, JSON.stringify(noteList[index]))
    }

    return (
        <NotesContext.Provider value={{
            notes: noteList,
            addNote: addNoteHandler,
            removeNote: removeNoteHandler,
            editNote: editNoteHandler
        }}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NotesContext