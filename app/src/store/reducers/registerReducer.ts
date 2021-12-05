import { ADD_USER_DATA_TO_STOR } from "../actions/addUserDataToStore"
import { userInfoType } from "../types"

interface defaultStateType{
    user: userInfoType
}

interface userActionType {
    type: string,
    payload?:any
}

const defaultState :defaultStateType = {
    user: {
        name: '',
        email: '',
        password: '',
    }
}

export const registerReducer = (state=defaultState, action:userActionType):defaultStateType => {
    switch (action.type) {
        case ADD_USER_DATA_TO_STOR:
            return {...state, 
                user: action.payload}
        default: 
            return state
    }
}