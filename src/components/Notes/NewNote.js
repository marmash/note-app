import { useState, useRef, useContext } from 'react'
import NotesProvider from '../../store/notes-context'

import style from './NewNote.module.css'
import Button from '../UI/Button'

const NewNote = () => {

    const [btnShow, setBtnShow] = useState(true)

    const focusHandler = () => {
        setBtnShow(prevState => !prevState)
    }

    const noteContent = useRef()
    const ctx = useContext(NotesProvider)

    const newNoteHandler = (event) => {
        event.preventDefault()
        const content = noteContent.current.value
        if (content.length === 0) return
        const d = new Date()
        const newNote = {
            id: Date.now(),
            date: `${d.toLocaleDateString()}, ${d.toLocaleTimeString().slice(0, 5)}`,
            content: content
        }
        noteContent.current.value = ''
        ctx.addNote(newNote)
    }

    return (
        <form onSubmit={newNoteHandler} className={style['note-form']}>
            <label htmlFor="new-note">Note</label>
            <textarea className={style.textarea}
                id="new-note"
                type="text"
                spellCheck="false" placeholder="Your new note..."
                ref={noteContent}
                onFocus={focusHandler}
                onBlur={focusHandler}>
            </textarea>
            <div className="center">
                <Button hide={btnShow}>Add note</Button>
            </div>
        </form>
    )
}

export default NewNote