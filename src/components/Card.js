import '../styles/Card.css';

const Card = ({ source, text, id, click }) => {
    return (
        <div className='card' onClick={() => click(id)}>
            <div className='cardImage'>
                <img src={source} alt='' />
            </div>
            <div className='cardText'>{text}</div>
        </div>
    );
}

export default Card;