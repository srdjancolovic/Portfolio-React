import classes from './Button.module.scss'

const Button = ({className, disabled, children})=>{

    const log = ()=>{
        console.log('test')
    }

    return <button className={`${classes.btn} ${className}`} disabled={disabled} onClick={log}>{children}</button>
}

export default Button;