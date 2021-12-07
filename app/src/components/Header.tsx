import cards from '../images/cards.png'
import list from '../images/list.png'

interface HeaderPropsTypes{
    [name:string]:any
}


const Header:React.FC<HeaderPropsTypes> = ( props ) => {

    const { setShowCards } = props

    return (
        <header className="main__heading-section">
            <button className="main__heading-btn" onClick={() => setShowCards('cards')}>
                <img className="main__heading-img" src={cards} alt="cards style" />
            </button>
            <button className="main__heading-btn" onClick={() => setShowCards('list')}>
                <img className="main__heading-img" src={list} alt="list style" />
            </button>
        </header>
    )

}

export default Header