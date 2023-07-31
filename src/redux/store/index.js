import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { itemsReducer } from './itemsReduce';

const rootReducer = combineReducers({
    items: itemsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))