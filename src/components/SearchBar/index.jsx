import "./style.css";
import { Input } from "../Input";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
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

  const [search, setSearch] = useState("");

  const itensPerPage = 24;

  const onSearchHandler = async () => {
    if (!search) {
      setLoading(true);
      setNotFound(false);
      const data = await getAllPokemons();
      setSearch(data);
    }
    if(search.value === 0) setSearch(getAllPokemons());
    const results = await getPokemon(search);
    if (!results) {
      setNotFound(true);
      if (notFound === true)
        setError("Nenhum Pokémon foi encontrado. Digite novamente!");
    } else {
      setPokemon(results);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
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
        console.log(data);
        setTotalPages(Math.ceil(data.count / itensPerPage));
        setAllPokemons(results);
        setLoading(false);
      } catch (error) {
        console.log("Erro FetchPokemonData:", error);
      }
    };

    getListPokemons();
  }, [page]);

  return (
    <>
      <form className="formContainer">
        <div className="formContent">
          <Input
            type="text"
            value={search}
            placeholder="Pesquisar um Pokémon..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch
            role="button"
            style={{ cursor: "pointer" }}
            onClick={onSearchHandler}
          />
        </div>
      </form>

      <PokeList
        pokemon={pokemon}
        pokeList={allPokemons}
        loading={loading}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
        setError={error}
      />
    </>
  );
};
