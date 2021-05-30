import '../styles/Gameboard.css';
import Card from './Card';
import CardData from './CardData';

const Gameboard = () => {
    return (
        <div id='Gameboard'>
            {
                CardData.map((card) => {
                   return <Card source={card.source} text={card.text} />
                })
            }
        </div>
    );
}

export default Gameboard;