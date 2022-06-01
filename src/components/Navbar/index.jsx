import "./style.css";
import { FaHeart } from "react-icons/fa";
import { PokemonContext } from "../../context/PokemonContext";
import React from "react";
import { useContext } from "react";

export const Navbar = () => {
  const { pokemonList } = useContext(PokemonContext);
  console.log(pokemonList.length);
  // const getCountPokemons = JSON.parse(window.localStorage.getItem("pokemons"));

  // const [pk, setPk] = useState(0);

  // const definePk = (pkm) => {
  //   setPk(() => pkm);
  // };
  // console.log("Log do pkBefore", pk);

  // useEffect(() => {
  //   if(window.localStorage.hasOwnProperty('pokemons'))
  //     definePk(getCountPokemons);
  // }, [pk]);

  return (
    <div>
      <header>
        <nav>
          <ul className="pokeNavigation">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <FaHeart style={{ color: "red", marginRight: "0.5rem" }} />
              <a href="/">
                Favoritos ({pokemonList.length})
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
