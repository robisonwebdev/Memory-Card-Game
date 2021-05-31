import '../styles/Card.css';

const Card = (props) => {
    const { source, text, id, click } = props;

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