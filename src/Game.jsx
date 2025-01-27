import { useState } from "react";
import Header from "./Header";
import Board from "./Board";

export default function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [previousId, setPreviousId] = useState(null);

  /*
    function that updates score on card click (event)
  */

  function updateScoreboard(cardId) {
    // updates score for each non duplicate card clicked
    // updates high score if current score surpases it
    if (cardId === previousId) {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setPreviousId(null);
    } else {
      setScore((score) => score + 1);
      setPreviousId(cardId);
    }
  }

  return (
    <>
      <Header score={score} highScore={highScore} />
      <Board className="board" updateScoreboard={updateScoreboard} />
    </>
  );
}
