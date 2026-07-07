import {GameHeader} from "./components/GameHeader";
import {Card} from "./components/Card";
import {WinMessage} from "./components/WinMessage.jsx";
import useGameLogic from "./hooks/useGameLogic.jsx";

const cardValues=[
    "🍟", "🍿", "🍕", "🥐", "🌯", "🥨", "🍘", "🍩",
    "🍟", "🍿", "🍕", "🥐", "🌯", "🥨", "🍘", "🍩",
];

function App(){
    const{cards,score,moves,handleCardClick,initializeGame,isGameComplete}=useGameLogic(cardValues);
    return(
        <div className="app">
            <GameHeader score={score} moves={moves} onReset={initializeGame}/>

            {isGameComplete && <WinMessage moves={moves}/>}

            <div className="cards-grid">
                {cards.map((card)=>(
                    <Card key={card.id} card={card}
                          onClick={handleCardClick}
                            />
                ))}
            </div>
        </div>
    );

}
export default App;