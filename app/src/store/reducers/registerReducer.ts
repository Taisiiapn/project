import { userInfoType } from "../types"


enum UserActionTypes {
    ADD_Register = "ADD_Register"
}

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
        case UserActionTypes.ADD_Register:
            return {...state, 
                user: action.payload}
        default: 
            return state
    }
}