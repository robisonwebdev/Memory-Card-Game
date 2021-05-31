import '../styles/Card.css';

const Card = (props) => {
    const { source, text } = props;

    return (
        <div className='card' onClick={() => { console.log(text) }}>
            <div className='cardImage'>
                <img src={source} alt='' />
            </div>
            <div className='cardText'>{text}</div>
        </div>
    );
}

export default Card;