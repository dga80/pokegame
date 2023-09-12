import React, { useState } from "react";
import { Pokedex } from "./Pokedex";
import './Pokedex.css';

export function Pokegame() {
    const initialData = [
        { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
        { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
        { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
        { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
        { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
        { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
        { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
        { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ];

    const [hand1, setHand1] = useState([]);
    const [hand2, setHand2] = useState(initialData);
    const [exp1, setExp1] = useState(0);
    const [exp2, setExp2] = useState(0);
    const [showPokecards, setShowPokecards] = useState(false);

    const startGame = () => {
        let tempHand1 = [];
        let tempHand2 = [...initialData];

        while (tempHand1.length < tempHand2.length) {
            let randIdx = Math.floor(Math.random() * tempHand2.length);
            let randPokemon = tempHand2.splice(randIdx, 1)[0];
            tempHand1.push(randPokemon);
        }

        let tempExp1 = tempHand1.reduce((exp, data) => exp + data.base_experience, 0);
        let tempExp2 = tempHand2.reduce((exp, data) => exp + data.base_experience, 0);

        setHand1(tempHand1);
        setHand2(tempHand2);
        setExp1(tempExp1);
        setExp2(tempExp2);

        // Mostrar las Pokecards gradualmente
        setShowPokecards(true);
    };

    return (
        <div>
            <button onClick={startGame} className="Pokedex-button">Start Game</button>
            {showPokecards && (
                <>
                    <Pokedex data={hand1} exp={exp1} isWinner={exp1 > exp2} />
                    <Pokedex data={hand2} exp={exp2} isWinner={exp2 > exp1} />
                </>
            )}
        </div>
    );
}
