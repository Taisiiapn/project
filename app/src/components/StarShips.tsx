import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionFetchPeople } from '../store/actions/addFetchPeople'
import { actionFetchStarShips } from '../store/actions/addFetchStarShips'
import CardsBuilder from './CardsBuilder'


const StarShips:React.FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(actionFetchStarShips())

    }, [])
    
    const starShipsRedux = useSelector(({starships}:any) => starships)

    return (
        <CardsBuilder starShipsRedux={starShipsRedux.data} />
    )
}

export default StarShips