import {combineReducers, createStore} from "redux";
import {CounteReducer} from "./counte-reducer";
import {loadState, saveState} from "../utile/localstorage";


let reducers = combineReducers({
    counter: CounteReducer,
})


export let store = createStore(reducers, loadState())


store.subscribe(() => {
    saveState({counter: store.getState().counter})
})

export type AppStateType = ReturnType<typeof reducers>
