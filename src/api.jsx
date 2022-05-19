export const getPokemon = async (pokemon) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon
      .toString()
      .toLowerCase()}`;
    const req = await fetch(url);
    return await req.json();
  } catch (error) {
    console.log(error);
  }
};

export const getAllPokemons = async (limit = 16, offset = 0) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const req = await fetch(url);
    return await req.json();
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonData = async (url) => {
    try {
      const req = await fetch(url);
      return await req.json();
    } catch (error) {
      console.log("Erro FetchPokemonData:", error);
    }
  };

  export const getPokemonDescription = async (id) => {
    try {
      const url = `https://pokeapi.co/api/v2/characteristic/${id}`
      const req = await fetch(url);
      return await req.json();
    } catch (error) {
      console.log("Erro FetchPokemonData:", error);
    }
  }
