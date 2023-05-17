/* eslint-disable no-unused-vars */
// CSS
import "./App.css";

// React
import { useCallback, useEffect, useState } from "react";

// data
import { wordsList } from "./data/words";

// components
import StartScreen from './components/StartScreen';
import GameOver from './components/GameOver';
import Game from './components/Game';

// estágios do jogo
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, ] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const startGame = () => {
    // eslint-disable-next-line no-undef
    setGameStage(stages[1].name)
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen {startGame} />}
     {gameStage === "game" && <Game />}
     {gameStage === "end" && <GameOver />}
    </div>
  );
}

export default App;
