import { SET_IS_LOADING_PEOPLE } from "../actions/actionIsLoadingPeople"
import { ADD_PEOPLE_TO_STORE } from "../actions/addPeopleToStore"


interface defaultStateType{
 
    isLoading: boolean,
    error: string,
    count: number,
    data: any[]

}

interface userActionType {
    type: string,
    payload?:any
}

const defaultState :defaultStateType = {
    isLoading: false,
    error: '',
    count: 0,
    data: []
}

export const fetchPeopleReducer = (state=defaultState, action:userActionType):defaultStateType => {
    switch (action.type) {
        case ADD_PEOPLE_TO_STORE:
            return {...state, 
                    isLoading: false,
                    error: '',
                    count: action.payload.count,
                    data: action.payload.results
            }
        case SET_IS_LOADING_PEOPLE:
            return {...state, 
                    isLoading: action.payload,
                    error: ''
                }
        default: 
            return state
    }
}