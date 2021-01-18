/* Pokecard component for pokedex app
 * Props = {id:int, name:string, type:string, base_experience:int}
 * Returns a bootstrap Card with the props
 */
function Pokecard({id, name, type, base_experience}){
  return (
    <div className="Pokecard card text-white bg-secondary m-1 d-inline-block">
      <div className="card-header"><b>{name}</b></div>
      <div className="card-body">
        <img alt="pokemon {name}" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}></img>
        <h4>Type: {type}</h4>
        <p className="card-text">Base EXP: {base_experience}</p>
      </div>
    </div>
  );
}

export default Pokecard;
