import React from "react";
import './Pokecard.css'

// const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
let threeDigits = (number) => (number <=999 ? `00${number}`.slice (-3): number)

export function Pokecard(props) {
    let imgSRC =`${POKE_API}${threeDigits(props.id)}.png`;
    return (
        <div className="Pokecard">
            <h1 className="Pokecard-title">{props.name}</h1>
            <img src={imgSRC} alt={props.name} />
            <div className="Pokecard-data">Type: {props.type}</div>
            <div className="Pokecard-data">EXP: {props.exp}</div>
        </div>
    );
}

