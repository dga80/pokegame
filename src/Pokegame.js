import React from "react";
import { Pokedex } from "./Pokedex";

export function Pokegame (){

    const data = [
        { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
        { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
        { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
        { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
        { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
        { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
        { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
        { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ]
    let hand1 = [];
    let hand2 = [...data];
    while (hand1.length < hand2.length){
        let randIdx = Math.floor(Math.random()* hand2.length);
        let randPokemon = hand2.splice(randIdx,1)[0];
        hand1.push(randPokemon);
        // hand2.splice(randIdx, 1) devuelve un array con el Pokémon eliminado.
        // hand2.splice(randIdx, 1)[0] accede al Pokémon dentro de esa array
    }
    let exp1 = hand1.reduce((exp, data)=> exp + data.base_experience,0);
    let exp2 = hand2.reduce((exp, data)=> exp + data.base_experience,0);
    return (
        <div>
            <Pokedex data={hand1} exp={exp1}/>
            <Pokedex data={hand2} exp={exp2}/>

        </div>
    
    )
}
