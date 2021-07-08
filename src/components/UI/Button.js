import style from './Button.module.css'

const Button = props => {

    const btnStyle = variant => {
        if (!variant) return ''
        if (variant === 'negative') return style.negative
        if (variant === 'neutral') return style.neutral
    }

    const btn = `${style.button} ${btnStyle(props.variant)} ${props.hide ? style.hide : ''}`

    return (
        <button className={btn} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button