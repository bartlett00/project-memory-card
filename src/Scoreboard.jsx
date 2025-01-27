// eslint-disable-next-line react/prop-types
export default function ScoreBoard({ score, highScore }) {
  return (
    <>
      <h3 className="score">Score: {score}</h3>
      <h3 className="high-score">High Score: {highScore}</h3>
    </>
  );
}
