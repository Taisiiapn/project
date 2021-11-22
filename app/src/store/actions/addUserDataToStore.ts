import { userInfoType } from "../types"

export const addUserDataToStore = (payload:userInfoType) => {
    return {type: "ADD_USER_DATA_TO_STOR", payload}
}

export const ADD_USER_DATA_TO_STOR = 'ADD_USER_DATA_TO_STOR'