import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionFetchPeople } from '../store/actions/addFetchPeople'
import CardsBuilder from './CardsBuilder'
import cards from '../images/cards.png'
import list from '../images/list.png'


const People:React.FC = () => {

    const dispatch = useDispatch()
    const [showCards, setShowCards] = useState(localStorage.getItem("cardsStyle") || "cards")

    useEffect(() => {

        dispatch(actionFetchPeople())
        localStorage.setItem('cardsStyle', "cards")
        
    }, [])

    useEffect(() => {
        console.log('TolocalStorage', showCards)
        localStorage.setItem('cardsStyle', showCards)
    }, [showCards])

    const peopleRedux = useSelector(({people}:any) => people)

    return (
        <>
            <header className="main__heading-section">
                <button className="main__heading-btn" onClick={() => setShowCards('cards')}>
                    <img className="main__heading-img" src={cards} alt="cards style" />
                </button>
                <button className="main__heading-btn" onClick={() => setShowCards('list')}>
                    <img className="main__heading-img" src={list} alt="list style" />
                </button>
            </header>

            <CardsBuilder showCards={showCards}
                peopleRedux={peopleRedux.data} />
        </>
    )
}

export default People
