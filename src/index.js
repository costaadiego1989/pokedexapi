import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { PokemonProvider } from "./context/PokemonContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </BrowserRouter>
);
