import "./style.css";
import { Input } from "../Input";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { PokeList } from "../PokeList/PokeList";
import { getPokemon, getAllPokemons, getPokemonData } from "../../api";

export const SearchBar = () => {
  const [pokemon, setPokemon] = useState();
  const [allPokemons, setAllPokemons] = useState();
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState("");

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [dataCount, setDataCount] = useState(0);

  const [search, setSearch] = useState("");

  const itensPerPage = 24;

  const onSearchHandler = async (e) => {
    e.preventDefault();
    const pokemon = await getPokemon(search);
    setPokemon(pokemon);
    setPage(0);
    setTotalPages(1);

    if (search.value.length === 0) {
      console.log("oi");
      setNotFound(true);
      setError("Digite ao menos o nome de um Pokémon. =(");
      setPage(0);
      setTotalPages(0);
    }

    if (!pokemon && !notFound) {
      setNotFound(true);
      setError("Não foi encontrado nenhum Pokémon com este nome. =(");
      setPage(0);
      setTotalPages(0);
    }

    if (pokemon && notFound) {
      setNotFound(false);
      setError("");
    }
  };

  const onHandleKeyPress = async (e) => {
    if (e.key === "Enter" && !search) {
      e.preventDefault();
    }
    if (e.key === "Enter" && search) {
      e.preventDefault();
      const pokemon = await getPokemon(search);
      setPokemon(pokemon);
      setNotFound(false);
      setPage(0);
      setTotalPages(1);
    }
    if (e.key === "Enter" && search && pokemon === null) {
      e.preventDefault();
     console.log("sdfsdfsd");
    }
    if (e.key === "Enter" && search && pokemon) {
      e.preventDefault();
      const pokemon = await getPokemon();
      setPokemon(pokemon);
      setNotFound(false);
      setPage(0);
      setTotalPages(1);
    }
  };

  const resetInput = async () => {
    if (search) {
      setPokemon();
      setAllPokemons(await getAllPokemons());
      setSearch("");
      setNotFound(false);
      setPage(0);
      setTotalPages(1);
    }
  };

  useEffect(() => {
    const getListPokemons = async () => {
      try {
        setLoading(true);
        const data = await getAllPokemons(itensPerPage, itensPerPage * page);
        const promises = data.results.map(async (pk) => {
          return await getPokemonData(pk.url);
        });
        const results = await Promise.all(promises);
        setDataCount(data);
        setTotalPages(Math.ceil(data.count / itensPerPage));
        setAllPokemons(results);
        setLoading(false);
      } catch (error) {
        console.log("Erro FetchPokemonData:", error);
      }
    };
    getListPokemons();
  }, [page, pokemon]);

  return (
    <>
      <form className="formContainer">
        <div className="formContent">
          <Input
            type="text"
            value={search}
            placeholder="Pesquisar um Pokémon..."
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => onHandleKeyPress(e)}
          />

          {pokemon || !!error !== false ? (
            <GrClose
              onClick={resetInput}
              role="button"
              style={{ cursor: "pointer" }}
            />
          ) : (
            <FaSearch
              role="button"
              style={{ cursor: "pointer" }}
              onClick={search ? onSearchHandler : null}
            />
          )}
        </div>
      </form>
      <p style={{ textAlign: "center" }}>{error}</p>
      <PokeList
        pokemon={pokemon}
        pokeList={allPokemons}
        loading={loading}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
        setError={error}
        search={search}
        data={dataCount}
        notFound={notFound}
      />
    </>
  );
};
