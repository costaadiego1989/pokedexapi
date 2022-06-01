import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";

export const App = () => {
  const initialization = () => {
    if (!window.localStorage.hasOwnProperty("pokemons")) {
      window.localStorage.setItem("pokemons", JSON.stringify([]));
    }
  };
  initialization();

  return (
    <div>
      <Header />
      <SearchBar />
    </div>
  );
};
