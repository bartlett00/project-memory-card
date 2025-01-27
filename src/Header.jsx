import ScoreBoard from "./Scoreboard";

// eslint-disable-next-line react/prop-types
export default function Header({ score, highScore }) {
  return (
    <section className="header">
      <div className="title-container">
        <h1>Pokemon Memory</h1>
        <h2>
          Increase your score by clicking a card, click a duplicate, and your
          score resets!
        </h2>
      </div>
      <ScoreBoard className="scoreboard" score={score} highScore={highScore} />
    </section>
  );
}
