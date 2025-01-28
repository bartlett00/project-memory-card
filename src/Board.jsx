import { useEffect, useState } from "react";
import Card from "./Card";
import PokedexBtn from "./PokedexBtn";

// eslint-disable-next-line react/prop-types
export default function Board({ updateScoreboard }) {
  // Board component makes API call, generates 12 random cards on mount/click
  useEffect(() => {
    generateBoard(pokedex[0], pokedex[1]);
  }, []);

  const [cards, setCards] = useState([]);
  const [pokedex, setPokedex] = useState([1, 151]);

  async function generateBoard(pokedexStart, pokedexEnd) {
    let cardSet = [];
    for (let i = 0; i < 12; i++) {
      const randomNum = Math.floor(
        Math.random() * (pokedexEnd - pokedexStart + 1) + pokedexStart
      );
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
    generateBoard(pokedex[0], pokedex[1]);
  }

  //TODO: fix bug causing cards not to rerender on first click
  function changePokedex(pokeGen) {
    console.log("changePokedex call");
    setPokedex(pokeGen);
    generateBoard(pokeGen[0], pokeGen[1]);
  }

  //TODO: write method of setting which generation of pokemon the player wants to play with
  return (
    <div className="gameboard">
      <div className="pokedex-btns">
        <h2>Pick a Pokemon generation:</h2>
        <PokedexBtn
          text={"Gen I"}
          changePokedex={changePokedex}
          pokeGen={[1, 151]}
        />
        <PokedexBtn
          text={"Gen II"}
          changePokedex={changePokedex}
          pokeGen={[152, 251]}
        />
        <PokedexBtn
          text={"Gen III"}
          changePokedex={changePokedex}
          pokeGen={[252, 386]}
        />
        <PokedexBtn
          text={"Gen IV"}
          changePokedex={changePokedex}
          pokeGen={[387, 493]}
        />
        <PokedexBtn
          text={"Gen V"}
          changePokedex={changePokedex}
          pokeGen={[494, 649]}
        />
        <PokedexBtn
          text={"Gen VI"}
          changePokedex={changePokedex}
          pokeGen={[650, 721]}
        />
        <PokedexBtn
          text={"Gen VII"}
          changePokedex={changePokedex}
          pokeGen={[722, 809]}
        />
        <PokedexBtn
          text={"Gen VIII"}
          changePokedex={changePokedex}
          pokeGen={[810, 905]}
        />
        <PokedexBtn
          text={"Gen IX"}
          changePokedex={changePokedex}
          pokeGen={[906, 1025]}
        />
        <PokedexBtn
          text={"Every Pokemon!"}
          changePokedex={changePokedex}
          pokeGen={[1, 1025]}
        />
      </div>
      <ul className="cards">
        {cards.map((card) => {
          return (
            <Card
              key={cards.indexOf(card)}
              monId={card.id}
              monName={card.monName}
              sprite={card.sprite}
              handleClick={handleClick}
            />
          );
        })}
      </ul>
    </div>
  );
}
