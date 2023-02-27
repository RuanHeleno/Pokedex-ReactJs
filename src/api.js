import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon";

export const searchPokemon = async (pokemon) => {
  const res = await axios
    .get(`${url}/${pokemon}`)
    .then((res) => res.data)
    .catch(function (err) {
      return {
        statusCode: 422,
        body: `Error: ${err}`,
      };
    });

  return res;
};

export const getPokemons = async (limit = 50, offset = 0) => {
  const res = await axios
    .get(`${url}?limit=${limit}&offset=${offset}`)
    .then((res) => res.data)
    .catch(function (err) {
        return {
          statusCode: 422,
          body: `Error: ${err}`,
        };
      });

  return res;
};

export const getPokemonData = async (url) => {
  const res = await axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.error(err));

  return res;
};
