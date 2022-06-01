import { createContext, useState } from "react";

const getPokemonLocalStorage = JSON.parse(window.localStorage.getItem("pokemons"));

const initialState = {
  pokemonList: getPokemonLocalStorage || [],
};

export const PokemonContext = createContext(initialState);

export const PokemonProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const updateState = (value) => {
    setState({ pokemonList: value });
    addStorage();
  };

  const addStorage = () => {
    window.localStorage.setItem('pokemons', JSON.stringify(state.pokemonList));
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemonList: state.pokemonList,
        favorites: state.pokemonList.length,
        updateList: (value) => updateState(value),
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
