import { fetchDataType } from "../types"

export const errorFetchPeople = (payload:fetchDataType) => {
    return {type: ERROR_FETCH_PEOPLE, payload}
}

export const ERROR_FETCH_PEOPLE = 'ERROR_FETCH_PEOPLE'