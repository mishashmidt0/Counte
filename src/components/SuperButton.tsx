import s from './style.module.css'


type superButtonPropsType = {
    value: string
    funct: () => void
    isDisable: boolean
}

export function SuperButton(props: superButtonPropsType) {
    return (
        <button className={s.button} disabled={props.isDisable} onClick={() => props.funct()}>{
            props.value
        }</button>
    )
}
