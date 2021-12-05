import axios from "axios";
import { actionIsLoading } from "./actionIsLoadingPeople";
import { addPeopleToStore } from "./addPeopleToStore";
import { errorFetchPeople } from "./errorFetchPeople";
 

export const actionFetchPeople = () => async (dispatch: any) => {

    try {
        dispatch(actionIsLoading(true))
        console.log("ЗАГРУЗКА ПОШЛА....")
        await axios.get('https://swapi.dev/api/people')
                .then(({data}:any) => {
                    dispatch(actionIsLoading(false))
                    console.log("ЗАГРУЗКА ОКОНЧЕНА....")
                    dispatch(addPeopleToStore(data))
        })
    }
    catch(e:any) {
        console.log("ОШИБКА....")

        dispatch(errorFetchPeople(e.message))
    }
}