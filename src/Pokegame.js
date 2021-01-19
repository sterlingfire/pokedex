import _ from "lodash";
import Pokedex from "./Pokedex";

/** Pokegame component that renders two Pokedex "hands"
 *
 * Props: props = Pokemon (array of pokemon objects)
 * pokemon objects look like: {id:int, name:string, type:string, base_experience:int}
 */

function Pokegame({pokemon}) {
  let shuffledPokemon = _.shuffle(pokemon);
  console.log('shuffled pokemon', shuffledPokemon);
  let hand1 = shuffledPokemon.slice(0,4);
  let hand2 = shuffledPokemon.slice(4);
  let hand1Total = hand1.reduce((a, c) => a+=c.base_experience,0);
  let hand2Total = hand2.reduce((a, c) => a+=c.base_experience,0);

  return (
    <div className="Pokegame">
      <h3>Hand one</h3>
      <Pokedex
        pokemon={hand1}
        totalExp={hand1Total}
        isWinner={hand1Total>hand2Total ? true : false} />
      <h3>Hand two</h3>
      <Pokedex
        pokemon={hand2}
        totalExp={hand2Total}
        isWinner={hand2Total>hand1Total ? true : false} />
    </div>
  )
}
const POKEMON = [
  {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
  {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
  {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
  {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
  {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
  {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
  {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
  {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
  ];

Pokegame.defaultProps = {pokemon:POKEMON};

export default Pokegame;
