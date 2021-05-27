import '../styles/Card.css';

const Card = () => {
    return (
        <div className='card'>
            <div className='cardImage'>
                <img src='https://images.unsplash.com/photo-1465768210703-d6986e3c1728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' />
            </div>
            <div className='cardText'>Test Text</div>
        </div>
    );
}

export default Card;