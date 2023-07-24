import {createStore ,combineReducers} from 'redux'
import { itemsReducer } from './ItemsReduce'

const rootReducer = combineReducers({
    items:itemsReducer
})

export const store = createStore(rootReducer)