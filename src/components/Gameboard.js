import '../styles/Gameboard.css';
import Card from './Card';
import CardData from './CardData';

const Gameboard = () => {
    const mappedCardData = CardData.map((card) => <Card {...card} key={card.id} />);

    return (
        <div id='Gameboard'>
            {mappedCardData}
        </div>
    );
}

export default Gameboard;