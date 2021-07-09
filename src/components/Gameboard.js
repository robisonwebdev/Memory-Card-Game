import '../styles/Gameboard.css';
import Card from './Card';
import CardData from './CardData';

const Gameboard = ({ click }) => {
    let randomCard = CardData.sort(() => Math.random() - 0.5);
    const mappedCardData = randomCard.map((card) => <Card {...card} key={card.id} click={click} />);

    return (
        <div id='Gameboard'>
            {mappedCardData}
        </div>
    );
}

export default Gameboard;