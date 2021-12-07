import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionFetchStarShips } from '../store/actions/addFetchStarShips'
import CardsBuilderShips from './CardsBuilderShips'
import Header from './Header'


const StarShips:React.FC = () => {

    const dispatch = useDispatch()
    const [showCards, setShowCards] = useState(localStorage.getItem("cardsStyle") || "cards")

    useEffect(() => {

        dispatch(actionFetchStarShips())
        localStorage.setItem('cardsStyle', "cards")
        
    }, [dispatch])

    useEffect(() => {

        localStorage.setItem('cardsStyle', showCards)
        
    }, [showCards])
    
    const starShipsRedux = useSelector(({starships}:any) => starships)

    return (
        <>
            <Header setShowCards={setShowCards} />

            <CardsBuilderShips showCards={showCards}
                starShipsRedux={starShipsRedux.data} />

        </>
    )
}

export default StarShips