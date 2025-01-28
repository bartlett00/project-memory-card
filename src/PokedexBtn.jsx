// eslint-disable-next-line react/prop-types
export default function PokedexBtn({ text, changePokedex, pokeGen }) {
  return <button onClick={() => changePokedex(pokeGen)}>{text}</button>;
}
