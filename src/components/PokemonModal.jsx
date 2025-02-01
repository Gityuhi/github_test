import React from "react";
import "./PokemonModal.css";

const PokemonModal = ({ open, handleClose, pokemon }) => {
  if (!open || !pokemon) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>
          ×
        </button>
        <div className="modal-body">
          {/* 左側：画像 */}
          <div className="modal-image">
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
            />
            <h2 className="modal-name">{pokemon.name}</h2>
          </div>

          {/* 右側：詳細情報 */}
          <div className="modal-details">
            <p>
              <strong>タイプ:</strong>{" "}
              {pokemon.types.map((type) => type.type.name).join(", ")}
            </p>
            <p>
              <strong>高さ:</strong> {pokemon.height / 10} m
            </p>
            <p>
              <strong>重さ:</strong> {pokemon.weight / 10} kg
            </p>
            <div>
              <strong>能力値:</strong>
              <ul>
                {pokemon.stats.map((stat) => (
                  <li key={stat.stat.name}>
                    {stat.stat.name}: {stat.base_stat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonModal;
