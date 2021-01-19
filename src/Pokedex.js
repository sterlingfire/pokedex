import Pokecard from "./Pokecard";

/* Pokedex component for pokedex app
 * props = Pokemon (array of pokemon objects)
 ** pokemon objects look like: {id:int, name:string, type:string, base_experience:int}
 * displays each pokemon as a bootstrap card (using the pokecard component)
 */
function Pokedex({pokemon}){
  console.log('pokemon in Pokedex', pokemon);
  return (
    <div className="Pokedex">
      { pokemon.map(mon => Pokecard(mon)) }
    </div>
  )

}


export default Pokedex;
