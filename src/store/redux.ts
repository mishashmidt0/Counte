import {combineReducers, createStore} from "redux";
import {CounteReducer} from "./counte-reducer";


let reducers = combineReducers({
    counteReducer: CounteReducer,
})


export let store = createStore(reducers)

export type AppStateType = ReturnType<typeof reducers>
