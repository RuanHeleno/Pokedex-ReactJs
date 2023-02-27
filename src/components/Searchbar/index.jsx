import { useState } from "react";

import { searchPokemon } from "../../api";

import { Button, Container, Input } from "./styles";

const Searchbar = (props) => {
  const { setPokemons } = props;
  const [searched, setSearched] = useState("ditto");

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);

    setPokemons([result]);
  };

  const onClickHandler = () => {
    onSearchHandler(searched);
  };

  const handleKeyDown = (e) => { 
    if(e.key === "Enter") onSearchHandler(searched);
  }

  return (
    <Container>
      <Input
        type="text"
        placeholder="Buscar Pokemon"
        value={searched}
        onChange={(e) => setSearched(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <Button type="submit" onClick={onClickHandler}>
        Buscar
      </Button>
    </Container>
  );
};

export default Searchbar;
