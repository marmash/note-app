import ReactDOM from 'react-dom'

import NoteEdit from '../Notes/NoteEdit'
import NoteShow from '../Notes/NoteShow'

import style from './Modal.module.css'

const Backdrop = props => {
    return <div className={style.backdrop} onClick={props.onClose} />
}

const Overlay = props => {
    return (
        <div className={style.modal}>
            {props.children}
        </div>
    )
}

const portalElement = document.getElementById('overlay')

const Modal = props => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <Overlay>
                    <p className={style.date}>{props.date}</p>
                    {props.edit ?
                        <NoteEdit id={props.id} content={props.content} onClose={props.onClose} /> :
                        <NoteShow content={props.content} onClose={props.onClose} />
                    }
                </Overlay>,
                portalElement
            )}
        </>
    )
}

export default Modal