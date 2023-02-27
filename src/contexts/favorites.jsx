import { createContext } from "react";

const FavoritesContext = createContext({
  favoritesPokemons: [],
  updateFavoritesPokemons: (id) => null,
});

export const FavoriteProvider = FavoritesContext.Provider;

export default FavoritesContext;
