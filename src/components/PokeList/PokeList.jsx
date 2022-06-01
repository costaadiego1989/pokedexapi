import "./style.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { Pagination } from "../Pagination/Pagination";
import { Loading } from "../Loading/index";
import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";

export const PokeList = ({
  pokeList,
  loading,
  page,
  totalPages,
  setPage,
  pokemon,
  data,
  notFound,
}) => {
  const { pokemonList, updateList } = useContext(PokemonContext);

  const onLeftClick = () => {
    if (page > 0) setPage(page - 1);
  };

  const onRightClick = () => {
    if (page <= totalPages) setPage(page + 1);
  };

  const addToFavorites = (pokemon) => {
    let pokeArray = pokemonList;
    pokeArray.push(pokemon);
    updateList(pokeArray);
  };

  const removeFromFavorites = (pokemon) => {
    let pokeArray = pokemonList;
    pokeArray.pop(pokemon);
    updateList(pokeArray);
  };

  return loading ? (
    <Loading />
  ) : (
    pokeList && (
      <>
        <div className="pokeTitleAndPagination">
          <h2 className="pokeListTitle">
            Lista de Pokémons (
            {!pokemon
              ? pokeList.length + " de " + (data.count - pokeList.length * page)
              : 1}
            )
          </h2>
          <div className="pokePagination">
            <Pagination
              page={page + 1}
              totalPages={totalPages}
              onLeftClick={onLeftClick}
              onRightClick={onRightClick}
              pokemon={pokemon}
              notFound={notFound}
            />
          </div>
        </div>
        <div className="pokeListContainer">
          <div className="pokeListContent">
            {pokemon ? (
              <div className="pokeItem">
                <div className="hoverPokeItem" key={pokemon.id}>
                  <div className="pokeHeaderCard">
                    <div className="pokeImg">
                      <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                      />
                    </div>
                    <div className="pokeTitleAndId">
                      <p>
                        <b># {pokemon.id}</b>
                      </p>
                      <h3>
                        {pokemon.name.charAt(0).toUpperCase() +
                          pokemon.name.slice(1).toLowerCase()}
                      </h3>
                      <div className="pokeAditionalInfo">
                        <small>{pokemon.weight}kg</small>
                        {pokemon.types.map((pk, index) => (
                          <small key={index}>{pk.type.name}</small>
                        ))}
                      </div>
                    </div>
                    <div>
                      {pokemonList.find((pk) => pk.id === pokemon.id) ? (
                        <AiFillHeart
                          style={{ color: "red" }}
                          className="pokeFavourite"
                          value={pokemon}
                          onClick={() => removeFromFavorites()}
                        />
                      ) : (
                        <AiOutlineHeart
                          className="pokeFavourite"
                          role="button"
                          value={pokemon}
                          onClick={() => addToFavorites(pokemon)}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              pokeList.map((poke, index) => (
                <div key={index} className="pokeItem">
                  <div className="hoverPokeItem" key={poke.id}>
                    <div className="pokeHeaderCard">
                      <div>
                        <img src={poke.sprites.front_default} alt={poke.name} />
                      </div>
                      <div className="pokeTitleAndId">
                        <p>
                          <b># {poke.id}</b>
                        </p>
                        <h3>
                          {poke.name.charAt(0).toUpperCase() +
                            poke.name.slice(1).toLowerCase()}
                        </h3>
                        <div className="pokeAditionalInfo">
                          <small>{poke.weight}kg</small>
                          {poke.types.map((pk, index) => (
                            <small key={index}>{pk.type.name}</small>
                          ))}
                        </div>
                      </div>
                      <div>
                        {pokemonList.find((pk) => pk.id === poke.id) ? (
                          <AiFillHeart
                            style={{ color: "red" }}
                            className="pokeFavourite"
                            value={poke}
                            onClick={() => removeFromFavorites()}
                          />
                        ) : (
                          <AiOutlineHeart
                            className="pokeFavourite"
                            role="button"
                            value={poke}
                            onClick={() => addToFavorites(poke)}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </>
    )
  );
};
