import {SuperButton} from "../../components/SuperButton";
import s from './style.module.css'
import {useState} from "react";

type SetBlockPropsType = {
    startValue: number
    maxValue: number
    instDataValue: (startValue: number, maxValue: number) => void
}

export function SetBlock(props: SetBlockPropsType) {
    let [startValueLocal, setStartValueLocal] = useState(props.startValue)
    let [maxValueLocal, setMaxValueLocal] = useState(props.maxValue)
    let [isDisable, setIsDisable] = useState<boolean>(true)
    let [isError, setIsError] = useState<boolean>(false)

    const setDate = () => {
        props.instDataValue(startValueLocal, maxValueLocal)
        setIsDisable(true)
    }

    const changeValueStart = (e: number) => {
        setStartValueLocal(e)
        setIsError(false)
        setIsDisable(false)
        if (e < 0 || e >= maxValueLocal) {
            setIsError(true)
            setIsDisable(true)
        }

    }
    const changeValueMax = (e: number) => {
        setMaxValueLocal(e)
        setIsError(false)
        setIsDisable(false)
        if (e <= 0 || e <= startValueLocal) {
            setIsDisable(true)
            setIsError(true)
        }

    }

    return (
        <div>
            <div className={s.inputs}>
                <div><span>max value:</span>
                    <input className={isError ? s.error : s.spanButton}
                           type='number'
                           value={maxValueLocal}
                           onChange={(e) => changeValueMax(Number(e.currentTarget.value))}/>
                </div>
                <div><span>start value:</span>
                    <input className={isError ? s.error : s.spanButton}
                           type='number'
                           value={startValueLocal}
                           onChange={(e) => changeValueStart(Number(e.currentTarget.value))}/></div>
            </div>
            <div className={s.button}>
                <SuperButton value={'set'} isDisable={isDisable} func={setDate}/>
            </div>
        </div>
    )
}
