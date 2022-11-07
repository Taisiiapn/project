import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import { registerReducer } from './reducers/registerReducer'

import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
    registration: registerReducer
})

export const store = createStore(
    rootReducer, composeWithDevTools()
)