import { fetchDataType } from "../types"

export const addStarShipsToStore = (payload:fetchDataType) => {
    return {type: ADD_STARSHIPS_TO_STORE, payload}
}

export const ADD_STARSHIPS_TO_STORE = 'ADD_STARSHIPS_TO_STORE'