import { useDispatch, useSelector } from 'react-redux';




const url = 'https://swapi.dev/api/people'

export const data = 
    
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('fetch error', error))



    // const dispatch = useDispatch()