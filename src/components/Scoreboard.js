import '../styles/Scoreboard.css';

const Scoreboard = (props) => {
    const { gameScore, highScore, title } = props;

    return (
        <div id="scoreboard">
            <div id='gameTitle'>
                <h1>{title}</h1>
            </div>
            <div id='scores'>
                <p id='gameScore'>Score: {gameScore}</p>
                <p id='highScore'>High Score: {highScore}</p>
            </div>
        </div>
    );
}

export default Scoreboard