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
            {/* <Card source={CardData[0].source} text={CardData[0].text} />
            <Card source={CardData[1].source} text={CardData[1].text} />
            <Card source={CardData[2].source} text={CardData[2].text} />
            <Card source={CardData[3].source} text={CardData[3].text} />
            <Card source={CardData[4].source} text={CardData[4].text} />
            <Card source={CardData[5].source} text={CardData[5].text} />
            <Card source={CardData[6].source} text={CardData[6].text} />
            <Card source={CardData[7].source} text={CardData[7].text} />
            <Card source={CardData[8].source} text={CardData[8].text} />
            <Card source={CardData[9].source} text={CardData[9].text} /> */}
        </div>
    );
}

export default Gameboard;