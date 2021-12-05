import { SET_IS_LOADING_STARSHIPS } from "../actions/actionIsLoadingStarShips"
import { ADD_STARSHIPS_TO_STORE } from "../actions/addStarShipsToStore"


interface defaultStateType{
    isLoading: boolean,
    error: string,
    count: number,
    data: any[]
}

interface shipsActionType {
    type: string,
    payload?:any
}

const defaultState :defaultStateType = {
    isLoading: false,
    error: '',
    count: 0,
    data: []
}

export const fetchStarShipsReducer = (state=defaultState, action:shipsActionType):defaultStateType => {
    switch (action.type) {
        case ADD_STARSHIPS_TO_STORE:
            return {...state, 
                    isLoading: false,
                    error: '',
                    count: action.payload.count,
                    data: action.payload.results
            }
        case SET_IS_LOADING_STARSHIPS:
            return {...state, 
                    isLoading: action.payload,
                    error: ''
            }
        default: 
            return state
    }
}