import { useContext, useState } from 'react'
import NotesProvider from '../../store/notes-context'
import Modal from '../UI/Modal'
import Menu from '../UI/NoteMenu'

import style from './Note.module.css'

import ReactMarkdown from "react-markdown"
import gfm from 'remark-gfm'

const Note = props => {

    const ctx = useContext(NotesProvider)

    const [zoom, setZoom] = useState(false)
    const [editMode, setEditMode] = useState(false)

    const deleteHandler = () => {
        ctx.removeNote(props.id)
    }

    const zoomHandler = () => {
        if (!zoom) {
            setZoom(true)
        } else {
            setZoom(false)
            setEditMode(false)
        }
    }

    const editHandler = () => {
        setEditMode(true)
        zoomHandler()
    }

    let note = props.content
    const limit = 310
    if (note.length > limit) {
        note = note.slice(0, limit) + '...'
    }

    return (
        <div className={style.note}>

            {zoom && <Modal id={props.id} content={props.content} date={props.date} edit={editMode} onClose={zoomHandler} />}

            <div className={style.content} onClick={zoomHandler}>
                <ReactMarkdown className="markdown-body" remarkPlugins={[gfm]} children={note} />
            </div>

            <div className={style.footer}>
                <div>{props.date}</div>
                <div><Menu onEdit={editHandler} onDelete={deleteHandler} /></div>
            </div>

        </div>
    );
};

export default Note;