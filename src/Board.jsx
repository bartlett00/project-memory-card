import Card from "./Card";

export default function Board({ updateScoreboard }) {
  // Board component makes API call, generates random cards on mount/click
  function handleClick(cardId) {
    updateScoreboard(cardId);
  }
  return <></>;
}
