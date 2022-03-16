import {connect} from "react-redux";
import {Counter} from "./Counter";
import {actionType, addValueAC, instDataValueAC, resetValueAC, stateType} from "../store/counte-reducer";
import {AppStateType} from "../store/redux";


let mapStateToProps = (state: AppStateType): stateType => {
    return {
        startValue: state.counteReducer.startValue,
        maxValue: state.counteReducer.maxValue,
        value: state.counteReducer.value,
    }
}

let mapDispatchToProps = (dispatch: (action: actionType) => void) => {
    return {
        addValue: () => {
            dispatch(addValueAC())
        },
        resetValue: () => {
            dispatch(resetValueAC())
        },
        instDataValue: (startValue: number, maxValue: number) => {
            dispatch(instDataValueAC(startValue, maxValue))
        }
    }
}


export const CounterContainer =
    connect(mapStateToProps, mapDispatchToProps)(Counter)
