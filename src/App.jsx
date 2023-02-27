import { useEffect, useState } from "react";

import { Navbar, Searchbar, Pokedex } from "./components";
import { getPokemonData, getPokemons } from "./api";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const itensPerPage = 30;

  const loadPokemons = async () => {
    try {
      setLoading(true);

      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const result = await Promise.all(promises);

      setPokemons(result);
      setTotalPages(Math.ceil(data.count / itensPerPage));
      setLoading(false);
    } catch (error) {
      console.error("LoadPokemons error: " + error);
    }
  };

  useEffect(() => {
    loadPokemons();
  }, [page]);

  return (
    <div className="App">
      <Navbar />
      <Searchbar setPokemons={setPokemons} />
      <Pokedex
        pokemons={pokemons}
        loading={loading}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;
