import { Pokecard } from "./Pokecard";
import './Pokedex.css'

export function Pokedex(props) {
    let title;
    if (props.isWinner) {
        title = <h1 className="Pokedex-winner">WINNER HAND!</h1>
    } else {
        title = <h1 className="Pokedex-loser">LOSER HAND!</h1>
    }

   

    return (
        <div className="Pokedex">
            <div className="Pokedex-header">
                {title}
                <p className="total">Total Experience: {props.exp}</p>
            </div>
            <div className="Pokedex-cards">
                {props.data.map((p) => (
                    <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                ))}
            </div>
        </div>
    )
}
