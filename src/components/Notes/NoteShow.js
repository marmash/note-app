import ReactMarkdown from "react-markdown"
import gfm from 'remark-gfm'

import Button from "../UI/Button"

import style from './NoteShow.module.css'


const NoteShow = props => {

    return (
        <>
            <div className={style.content}>
                <ReactMarkdown remarkPlugins={[gfm]} children={props.content} />
            </div>
            <div className={style.footer}>
                <Button variant='neutral' onClick={props.onClose}>Close</Button>
            </div>
        </>
    )
}

export default NoteShow