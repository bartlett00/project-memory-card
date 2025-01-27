import { useEffect, useState } from "react";
import Card from "./Card";
import { monsArr } from "./testMons";

// eslint-disable-next-line react/prop-types
export default function Board({ updateScoreboard }) {
  // Board component makes API call, generates 12 random cards on mount/click
  useEffect(() => {
    generateBoard();
  }, []);

  const [cards, setCards] = useState([]);

  async function generateBoard() {
    let cardSet = [];
    for (let i = 0; i < 12; i++) {
      const randomNum = Math.floor(Math.random() * 151) + 1;
      const randomMon = `https://pokeapi.co/api/v2/pokemon/${randomNum}/`;
      await fetch(randomMon)
        .then((result) => {
          if (result.ok) {
            // console.log(result);
            return result.json();
          }
          throw result;
        })
        .then((data) => {
          const neededInfo = {
            id: data.id,
            monName: data.name,
            sprite: data.sprites.front_default,
          };
          // console.log(neededInfo);
          cardSet.push(neededInfo);
        });
    }
    console.log(cardSet);
    setCards(cardSet);
    // return cardSet;
  }

  function handleClick(cardId) {
    console.log(cardId);
    updateScoreboard(cardId);
    generateBoard();
  }

  //TODO: fix bug causing duplicate keys to break game
  return (
    <ul className="cards">
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            monId={card.id}
            monName={card.monName}
            sprite={card.sprite}
            handleClick={handleClick}
          />
        );
      })}
    </ul>
  );
}
