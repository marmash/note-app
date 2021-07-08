import { Menu, MenuItem } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'

import style from './NoteMenu.module.css'

import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'

const NoteMenu = props => {
    return (
        <Menu menuButton={<button className={style['btn-menu']}><BsThreeDotsVertical /></button>}>
            <MenuItem onClick={props.onEdit}><FaEdit className={style.icon} />Edit</MenuItem>
            <MenuItem onClick={props.onDelete}><FaTrashAlt className={style.icon} />Delete</MenuItem>
        </Menu>
    );
}

export default NoteMenu