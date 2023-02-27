import { useEffect, useState } from "react";

import { Navbar, Searchbar, Pokedex } from "./components";
import { getPokemonData, getPokemons, searchPokemon } from "./api";

import "./App.css";
import { FavoriteProvider } from "./contexts/favorites";

const favoritesKey = "favorites";

function App() {
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const itensPerPage = 30;

  const loadPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);

      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const result = await Promise.all(promises);

      setPokemons(result);
      setTotalPages(Math.ceil(data.count / itensPerPage));
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const updateFavoritesPokemons = (name) => {
    try {
      const updatedFavorites = [...favorites];
      const favoriteIndex = favorites.indexOf(name);

      favoriteIndex >= 0
        ? updatedFavorites.splice(favoriteIndex, 1)
        : updatedFavorites.push(name);

      setFavorites(updatedFavorites);
      localStorage.setItem(favoritesKey, JSON.stringify(favorites));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadPokemons();
  }, [page]);

  const loadFavoritesPokemons = () => {
    try {
      const pokemonsSaves =
        JSON.parse(localStorage.getItem(favoritesKey)) || [];

      setFavorites(pokemonsSaves);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadFavoritesPokemons();
  }, []);

  const onSearchHandler = async (pokemon) => {
    setLoading(true);

    if (!pokemon) return loadPokemons();

    setNotFound(false);

    const result = await searchPokemon(pokemon);

    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }

    setLoading(false);
  };

  return (
    <FavoriteProvider
      value={{
        favoritesPokemons: favorites,
        updateFavoritesPokemons: updateFavoritesPokemons,
      }}
    >
      <div className="App">
        <Navbar />
        <Searchbar onSearchHandler={onSearchHandler} />
        {notFound ? (
          <div>Não achado...</div>
        ) : (
          <Pokedex
            pokemons={pokemons}
            loading={loading}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        )}
      </div>
    </FavoriteProvider>
  );
}

export default App;
