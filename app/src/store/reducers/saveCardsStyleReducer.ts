import { SAVE_CARDS_STYLE } from "../actions/actionSaveCardsStyle"

interface defaultStateType{
    cardsStyle: string | null
}

interface actionType {
    type: string,
    payload?:any
}

const defaultState :defaultStateType = {
    cardsStyle: 'cards'
}

export const registerReducer = (state=defaultState, action:actionType):defaultStateType => {
    switch (action.type) {
        case SAVE_CARDS_STYLE:
            return {...state, 
                cardsStyle: action.payload}
        default: 
            return state
    }
}