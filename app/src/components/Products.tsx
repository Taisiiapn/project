import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchPeople } from '../store/actions/addFetchPeople'
import { actionFetchStarShips } from "../store/actions/addFetchStarShips";



const Products:React.FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(actionFetchPeople())

        dispatch(actionFetchStarShips())

    }, [])

    const peopleRedux = useSelector(({people}:any) => people)
    const starShipsRedux = useSelector(({starships}:any) => starships)

    return (
        <main className="main">
            <ul className='main__list'>

                <li className='main__list-item'>
                    <a href="/products/people" className="main__section-link">
                    </a>

                    <div className="main__section">
                        {peopleRedux.isLoading 
                            ? 'Loading...' 
                            : peopleRedux.count}
                    </div>
                    <span className="main__section-naming">People</span>
                </li>

                <li className='main__list-item'>
                    <a href="/products/starships" className="main__section-link">
                    </a>

                    <div className="main__section">
                        {starShipsRedux.isLoading 
                            ? 'Loading...'
                            : starShipsRedux.count}
                    </div>
                    <span className="main__section-naming">Starships</span>
                </li>

            </ul>
        </main>
    )

}

export default Products
