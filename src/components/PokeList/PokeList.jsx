import "./style.css";
import { AiOutlineHeart } from "react-icons/ai";
import { Pagination } from "../Pagination/Pagination";
import { Loading } from "../Loading/index";
import { useState } from "react";

export const PokeList = ({
  pokeList,
  loading,
  page,
  totalPages,
  setPage,
  pokemon,
  data,
}) => {
  const [toFavourites, setToFavourites] = useState();

  const onLeftClick = () => {
    if (page > 0) setPage(page - 1);
  };

  const onRightClick = () => {
    if (page <= totalPages) setPage(page + 1);
  };

  const addToFavourites = (id, name) => {
    console.log(id, name);
  };

  return loading ? (
    <Loading />
  ) : (
    pokeList && (
      <>
        <div className="pokeTitleAndPagination">
          <h2 className="pokeListTitle">Lista de Pokémons ({data.count})</h2>
          <div className="pokePagination">
            <Pagination
              page={page + 1}
              totalPages={totalPages}
              onLeftClick={onLeftClick}
              onRightClick={onRightClick}
              pokemon={pokemon}
            />
          </div>
        </div>
        <div className="pokeListContainer">
          <div className="pokeListContent">
            {pokemon ? (
              <div className="pokeItem">
                <div key={pokemon.id}>
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
                      <AiOutlineHeart
                        className="pokeFavourite"
                        role="button"
                        value={pokemon.id}
                        onClick={() => addToFavourites(pokemon.id)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              pokeList.map((poke, index) => (
                <div key={index} className="pokeItem">
                  <div key={poke.id}>
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
                        <AiOutlineHeart
                          className="pokeFavourite"
                          role="button"
                          value={poke.id}
                          onClick={() => addToFavourites(poke.id, poke.name)}
                        />
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
