export type stateType = {
    startValue: number
    maxValue: number
    value: number
}
type addValue = {
    type: 'ADD-VALUE'
}
type resetValue = {
    type: 'RESET-VALUE'
}
type instDataValue = {
    type: 'INST-DATA-VALUE',
    startValue: number
    maxValue: number
}
export type actionType = addValue | resetValue | instDataValue

const defoultState = {
    startValue: 0,
    maxValue: 5,
    value: 0,
}

export const CounteReducer = (state: stateType = defoultState, action: actionType): stateType => {
    switch (action.type) {
        case 'ADD-VALUE': {
            return {...state, value: state.value + 1}
        }
        case 'RESET-VALUE': {
            return {...state, value: state.startValue}
        }
        case 'INST-DATA-VALUE': {
            return {...state, value: state.startValue, startValue: action.startValue, maxValue: action.maxValue}
        }
        default: {
            return state
        }
    }
}

export const addValueAC = (): addValue => {
    return {
        type: 'ADD-VALUE'
    }
}
export const resetValueAC = (): resetValue => {
    return {
        type: 'RESET-VALUE'
    }
}
export const instDataValueAC = (startValue: number, maxValue: number): instDataValue => {
    return {
        type: 'INST-DATA-VALUE',
        startValue,
        maxValue
    }
}
