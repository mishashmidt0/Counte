import {SuperButton} from "../../components/SuperButton";
import s from './style.module.css'

type AddResetBlockPropsType = {
    value: number
    addValue: () => void
    resetValue: () => void
}

export function AddResetBlock(props: AddResetBlockPropsType) {
    return (
        <div>
            <div>
                <div className={s.text}><span>{props.value}</span></div>
            </div>
            <div className={s.buttonsDiv}>
                <SuperButton value={'inc'} funct={() => props.addValue()} isDisable={false}/>

                <SuperButton value={'reset'} funct={() => props.resetValue()} isDisable={false}/>
            </div>
        </div>
    )
}
