export const PokeCard = ({ pokemon }) => {
  return (
    pokemon && (
      <div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h2>{pokemon.name}</h2>
        {/* {pokemon.types[1].map((pk) => (
          <p>{pk.name}</p>
        ))} */}
      </div>
    )
  );
};
