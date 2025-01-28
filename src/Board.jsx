import { useEffect, useState } from "react";
import Card from "./Card";
import PokedexBtn from "./PokedexBtn";

// eslint-disable-next-line react/prop-types
export default function Board({ updateScoreboard, resetScore }) {
  useEffect(() => {
    generateBoard(pokedex[0], pokedex[1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          cardSet.push(neededInfo);
        });
    }
    setCards(cardSet);
  }

  function handleClick(cardId) {
    updateScoreboard(cardId);
    generateBoard(pokedex[0], pokedex[1]);
  }

  function changePokedex(pokeGen) {
    if (
      confirm(
        "Are you sure you want to change pokedex? your score will be reset."
      )
    ) {
      resetScore();
      setPokedex(pokeGen);
      generateBoard(pokeGen[0], pokeGen[1]);
    } else {
      return;
    }
  }

  return (
    <div className="gameboard">
      <h2 className="pick-header">Pick a Pokemon generation:</h2>
      <div className="pokedex-btns">
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
