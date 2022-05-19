import "./style.css";
import { AiOutlineHeart } from "react-icons/ai";
import { Pagination } from "../Pagination/Pagination";
import { Loading } from "../Loading/index";

export const PokeList = ({ pokeList, loading, page, totalPages, setPage, pokemon }) => {
  const onLeftClick = () => {
    if (page > 0) setPage(page - 1);
  };

  const onRightClick = () => {
    if (page <= totalPages) setPage(page + 1);
  };

  return loading ? (
    <Loading />
  ) : (
    pokeList && (
      <>
        <div className="pokeTitleAndPagination">
          <h2 className="pokeListTitle">Lista de Pokémons</h2>
          <div className="pokePagination">
            <Pagination
              page={page + 1}
              totalPages={totalPages}
              onLeftClick={onLeftClick}
              onRightClick={onRightClick}
            />
          </div>
        </div>
        <div className="pokeListContainer">
          <div className="pokeListContent">
            {pokemon ? 
              <div className="pokeItem">
                <div key={pokemon.id}>
                  <div className="pokeHeaderCard">
                    <div>
                      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
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
                        {pokemon.types.map((pk) => (
                        <small>{pk.type.name}</small>
                        ))}
                      </div>
                    </div>
                    <div>
                      <AiOutlineHeart className="pokeFavourite" role="button" />
                    </div>
                  </div>
                </div>
              </div>
             : pokeList.map((poke) => (
              <div className="pokeItem">
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
                        {poke.types.map((pk) => (
                        <small>{pk.type.name}</small>
                        ))}
                      </div>
                    </div>
                    <div>
                      <AiOutlineHeart className="pokeFavourite" role="button" />
                    </div>
                  </div>
                </div>
              </div>
            )) }
          </div>
        </div>
      </>
    )
  );
};
