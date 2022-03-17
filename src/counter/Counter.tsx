import {SetBlock} from "./bloks/SetBlock";
import s from './style.module.css'
import {AddResetBlock} from "./bloks/AddResetBlock";

type CounterPropsType = {
    startValue: number
    maxValue: number
    value: number
    addValue: () => void
    resetValue: () => void
    instDataValue: (startValue: number, maxValue: number) => void
}

export function Counter(props: CounterPropsType) {
    return (
        <div className={s.container}>
            <SetBlock maxValue={props.maxValue} startValue={props.startValue} instDataValue={props.instDataValue}/>
            <AddResetBlock value={props.value} addValue={props.addValue} resetValue={props.resetValue} startValue={props.startValue} maxValue={props.maxValue}/>
        </div>
    )
}
