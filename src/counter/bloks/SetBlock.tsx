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


    return (
        <div>
            <div className={s.inputs}>
                <div><span>max value:</span> <input type='number' value={maxValueLocal} onChange={(e) => setMaxValueLocal(Number(e.currentTarget.value))}/></div>
                <div><span>start value:</span> <input type='number' value={startValueLocal} onChange={(e) => setStartValueLocal(Number(e.currentTarget.value))}/></div>
            </div>
            <div className={s.button}>
                <SuperButton value={'set'} funct={() => props.instDataValue(startValueLocal, maxValueLocal)} isDisable={false}/>
            </div>
        </div>
    )
}
