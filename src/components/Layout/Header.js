import style from './Header.module.css'
import { BsPencilSquare } from 'react-icons/bs'

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <BsPencilSquare style={{ 'verticalAlign': 'top', 'height': '2.2rem', 'width': '2.2rem' }} />
            </div>
            <div className={style.name}>
                <h1 className={style.title}>Note App</h1>
                <p className={style.subtitle}>Markdown Friendly</p>
            </div>
        </div>
    )
}

export default Header