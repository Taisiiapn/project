import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { fetchPeopleReducer } from './reducers/fetchPeopleToReduxReducer';
import { registerReducer } from './reducers/registerReducer'
import { fetchStarShipsReducer } from './reducers/StarShipsReducer';


export const rootReducer = combineReducers({
    registration: registerReducer,
    people: fetchPeopleReducer,
    starships: fetchStarShipsReducer

})

export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
)