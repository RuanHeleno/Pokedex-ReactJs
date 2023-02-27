import { useState } from "react";

import { Button, Container, Input } from "./styles";

const Searchbar = (props) => {
  const { onSearchHandler } = props;
  const [searched, setSearched] = useState("");

  const onChangeHandler = (e) => {
    setSearched(e.target.value);

    if (e.target.value === "") onSearchHandler(null);
  };

  const onClickHandler = () => {
    onSearchHandler(searched);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSearchHandler(searched);
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Buscar Pokemon"
        value={searched}
        onChange={onChangeHandler}
        onKeyDown={handleKeyDown}
      />

      <Button type="submit" onClick={onClickHandler}>
        Buscar
      </Button>
    </Container>
  );
};

export default Searchbar;
