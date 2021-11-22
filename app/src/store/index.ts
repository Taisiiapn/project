import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { registerReducer } from './reducers/registerReducer'

import thunk from 'redux-thunk';
import { action_ADD_Register } from './actions/addUserDataToStore';

export const rootReducer = combineReducers({
    registration: registerReducer
})

export const store = createStore(
    rootReducer, composeWithDevTools()
)