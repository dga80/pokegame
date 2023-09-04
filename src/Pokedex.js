import { Pokecard } from "./Pokecard";

import './Pokedex.css'

export function Pokedex(props) {

    return (
        <div className="Pokedex">
            <h1>POKEDEX</h1>
            <p>Total Experience: {props.exp}</p>
            <p>{props.isWinner ? 'WINNER!' : 'LOOSER!'}</p>
            <div className="Pokedex-cards">
            {props.data.map((p)=> (
                <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>
            )) }
            </div>
        </div>
    )
}   