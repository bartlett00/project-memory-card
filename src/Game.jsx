import { useState } from "react";
import Header from "./Header";
import Board from "./Board";

export default function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [previousIds, setPreviousIds] = useState([]);

  function updateScoreboard(cardId) {
    if (previousIds.includes(cardId)) {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setPreviousIds([]);
    } else {
      setScore((score) => score + 1);
      setPreviousIds([...previousIds, cardId]);
    }
  }

  function resetScore() {
    if (score > highScore) {
      setHighScore(score);
    }
    setScore(0);
    setPreviousIds([]);
  }

  return (
    <>
      <Header score={score} highScore={highScore} />
      <Board
        className="board"
        updateScoreboard={updateScoreboard}
        resetScore={resetScore}
      />
    </>
  );
}
