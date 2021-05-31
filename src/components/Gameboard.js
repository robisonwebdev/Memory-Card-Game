import '../styles/Gameboard.css';
import Card from './Card';
import CardData from './CardData';

const Gameboard = (props) => {
    const mappedCardData = CardData.map((card) => <Card {...card} key={card.id} click={props.click} />);

    return (
        <div id='Gameboard'>
            {mappedCardData}
        </div>
    );
}

export default Gameboard;