import { useRef, useContext } from 'react'
import NotesProvider from '../../store/notes-context'

import Button from '../UI/Button'
import style from './NoteEdit.module.css'

const NoteEdit = props => {

    const ctx = useContext(NotesProvider)
    const noteContent = useRef()

    const saveHandler = (event) => {
        event.preventDefault()
        ctx.editNote(props.id, noteContent.current.value)
        props.onClose()
    }

    const cancelHandler = (event) => {
        event.preventDefault()
        props.onClose()
    }

    return (
        <form onSubmit={saveHandler}>
            <textarea className={style.textarea}
                type="text"
                spellCheck="false"
                ref={noteContent}
                defaultValue={props.content}
            >
            </textarea>
            <div className={style.footer}>
                <Button variant='neutral' onClick={cancelHandler}>Cancel</Button>
                <Button>Save</Button>
            </div>
        </form>
    )
}

export default NoteEdit