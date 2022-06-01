import "./style.css";
import { FaHeart } from "react-icons/fa";
import { PokemonContext } from "../../context/PokemonContext";
import React from "react";
import { useContext } from "react";
import Swal from "sweetalert2";

export const Navbar = () => {
  const { pokemonList } = useContext(PokemonContext);
  console.log(pokemonList);
  const pokeName = pokemonList.map((pokemon) => {
    return pokemon.name;
  });

  const SwalPopup = () => {
    Swal.fire({
      title: `Pokémons Favoritos (${pokemonList.length})`,
      html: pokeName.toString().split(","),
      icon: "info",
      confirmButtonText: "Fechar",
    });
  };

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
              <a href="#" onClick={SwalPopup}>
                Favoritos ({pokemonList.length})
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
