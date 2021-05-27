import '../styles/Scoreboard.css';

const Scoreboard = (props) => {
    return (
        <div id="scoreboard">
            <div id='gameTitle'>
                <h1>Memory Game</h1>
            </div>
            <div id='scores'>
                <p id='gameScore'>Score: {props.gameScore}</p>
                <p id='highScore'>High Score: {props.highScore}</p>
            </div>
        </div>
    );
}

export default Scoreboard