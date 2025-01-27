/* eslint-disable react/prop-types */
export default function Card({ monName, sprite, monId, handleClick }) {
  return (
    <li className="card" onClick={() => handleClick(monId)}>
      <img src={sprite} className="sprite"></img>
      <p className="card-name">{monName}</p>
    </li>
  );
}
