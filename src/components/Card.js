import '../styles/Card.css';

const Card = (props) => {
    return (
        <div className='card'>
            <div className='cardImage'>
                <img src={props.source} />
            </div>
            <div className='cardText'>{props.text}</div>
        </div>
    );
}

export default Card;