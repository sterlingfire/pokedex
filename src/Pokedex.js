import Pokecard from "./Pokecard";

/* Pokedex component for pokedex app
 * props = Pokemon (an array of pokemon objects), totalExp, isWinner
 ** pokemon objects look like: {id:int, name:string, type:string, base_experience:int}
 * totalExp:int (total base_experience for all pokemon in hand)
 * isWinner:boolean (Did this hand win?)
 * displays each pokemon as a bootstrap card (using the pokecard component)
 */
function Pokedex({pokemon, totalExp, isWinner}){
  console.log('pokemon in Pokedex', pokemon);
  return (
    <div className="Pokedex">
      { pokemon.map(mon => Pokecard(mon)) }
      <h3>{isWinner? "This hand won!":""}</h3>
      <p>Total Experience: {totalExp}</p>
    </div>
  )

}


export default Pokedex;
