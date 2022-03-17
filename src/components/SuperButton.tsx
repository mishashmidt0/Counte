import s from './style.module.css'


type superButtonPropsType = {
    value: string
    isDisable: boolean
    func: () => void
}

export function SuperButton({value, func, isDisable}: superButtonPropsType) {
    return (
        <button className={s.button} disabled={isDisable} onClick={() => func()}>{
            value
        }</button>
    )
}
