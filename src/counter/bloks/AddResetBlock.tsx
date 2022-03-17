import {SuperButton} from "../../components/SuperButton";
import s from './style.module.css'
import {useState} from "react";

type AddResetBlockPropsType = {
    value: number
    addValue: () => void
    resetValue: () => void
    startValue: number
    maxValue: number
}


export function AddResetBlock(props: AddResetBlockPropsType) {

    const addvalue = () => {
        if (props.value < props.maxValue) props.addValue()
    }

    return (
        <div>
            <div>
                <div className={s.text}><span className={props.maxValue === props.value ? s.maxNumber : ''}> {props.value}</span></div>
            </div>
            <div className={s.buttonsDiv}>
                <SuperButton value={'inc'} isDisable={props.maxValue === props.value ? true : false} func={addvalue}/>

                <SuperButton value={'reset'} isDisable={props.value > props.startValue ? false : true} func={props.resetValue}/>
            </div>
        </div>
    )
}
