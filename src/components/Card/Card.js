import React from "react";
import "./Card.css";

const Card = ({ pokemon, openModal }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardTypes">
        <div>タイプ</div>
        {pokemon.types.map((type) => {
          return (
            <div key={type.type.name}>
              <span className="typeName">{type.type.name}</span>
            </div>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">重さ：{pokemon.weight / 10} kg</p>
        </div>
        <div className="cardData">
          <p className="title">高さ：{pokemon.height / 10} m</p>
        </div>
        <div className="cardData">
          <p className="title">
            アビリティ：{pokemon.abilities[0].ability.name}
          </p>
        </div>
        <button className="cardButton" onClick={() => openModal(pokemon)}>
          詳細
        </button>
      </div>
    </div>
  );
};

export default Card;
