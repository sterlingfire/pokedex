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
  return (
    <div className="Pokegame">
      <h3>Hand one</h3>
      <Pokedex pokemon={shuffledPokemon.slice(0,4)}/>
      <h3>Hand two</h3>
      <Pokedex pokemon={shuffledPokemon.slice(4)}/>
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
  