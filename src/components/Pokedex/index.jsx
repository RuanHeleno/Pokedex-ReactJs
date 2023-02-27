import SyncLoader from "react-spinners/SyncLoader";

import Pagination from "../Pagination";
import Pokemon from "../Pokemon";

import { Cards, Container, Load, Top } from "./styles";

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;

  const onLeftClickHandler = () => {
    if (page > 0) setPage(page - 1);
  };

  const onRightClickHandler = () => {
    if (page + 1 < totalPages) setPage(page + 1);
  };

  return (
    <Container>
      <Top>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </Top>

      {loading ? (
        <Load>
          <SyncLoader color={"white"} size={20} />
        </Load>
      ) : (
        <Cards>
          {pokemons &&
            pokemons.map((pokemon, id) => (
              <Pokemon key={id} pokemon={pokemon} />
            ))}
        </Cards>
      )}
    </Container>
  );
};

export default Pokedex;
