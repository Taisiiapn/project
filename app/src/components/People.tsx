import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionFetchPeople } from '../store/actions/addFetchPeople'
import CardsBuilderPeople from './CardsBuilderPeople'
import Header from './Header'


const People:React.FC = () => {

    const dispatch = useDispatch()
    const [showCards, setShowCards] = useState(localStorage.getItem("cardsStyle") || "cards")

    useEffect(() => {

        dispatch(actionFetchPeople())
        localStorage.setItem('cardsStyle', "cards")
        
    }, [dispatch])

    useEffect(() => {

        localStorage.setItem('cardsStyle', showCards)
        
    }, [showCards])

    const peopleRedux = useSelector(({people}:any) => people)

    return (
        <>
            <Header setShowCards={setShowCards} />

            <CardsBuilderPeople showCards={showCards}
                peopleRedux={peopleRedux.data} />
        </>
    )
}

export default People
