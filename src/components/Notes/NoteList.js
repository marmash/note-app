import { useContext } from 'react'
import NotesProvider from '../../store/notes-context'

import Note from './Note'
import style from './NoteList.module.css'

const NoteList = () => {

    const ctx = useContext(NotesProvider)

    return (
        <>
            <div style={{ 'textAlign': 'center' }}>
                {ctx.notes.length < 1 && <p className={style.message}>No notes found. Create something!</p>}
            </div>
            <ul className={style['note-list']}>
                {ctx.notes.map(note => (
                    <Note
                        key={note.id}
                        id={note.id}
                        date={note.date}
                        content={note.content}
                    />
                ))}
            </ul>
        </>
    )
}

export default NoteList