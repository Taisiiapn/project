import axios from "axios"
import { actionIsLoadingStarships } from "./actionIsLoadingStarShips"
import { addStarShipsToStore } from "./addStarShipsToStore"
import { errorFetchStarShips } from "./ErrorFetchStarShips"



export const actionFetchStarShips = () => async (dispatch: any) => {

    try {
        dispatch(actionIsLoadingStarships(true))
        console.log("ЗАГРУЗКА ПОШЛА....")
        await axios.get('https://swapi.dev/api/starships')
            .then(({data}:any) => {
                dispatch(actionIsLoadingStarships(false))
                console.log("ЗАГРУЗКА ОКОНЧЕНА....")
                dispatch(addStarShipsToStore(data))
            })
    }
    catch (e:any) {
        console.log("ОШИБКА....")
        dispatch(errorFetchStarShips(e.message))
    }
}