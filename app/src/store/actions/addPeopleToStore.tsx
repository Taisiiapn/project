import { fetchDataType } from "../types"

export const addPeopleToStore = (payload:fetchDataType) => {
    return {type: ADD_PEOPLE_TO_STORE, payload}
}

export const ADD_PEOPLE_TO_STORE = 'ADD_PEOPLE_TO_STORE'