import { fetchDataType } from "../types"

export const errorFetchStarShips = (payload:fetchDataType) => {
    return {type: ERROR_FETCH_STARSHIPS, payload}
}

export const ERROR_FETCH_STARSHIPS = 'ERROR_FETCH_STARSHIPS'