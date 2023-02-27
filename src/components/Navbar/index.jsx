import { useContext } from "react";

import FavoritesContext from "../../contexts/favorites";

import { Container, Favorites, Heart, LeftSide, Logo } from "./styles";

const Navbar = () => {
  const { favoritesPokemons } = useContext(FavoritesContext);
  const logo =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <Container>
      <LeftSide>
        <Logo src={logo} alt="PokeApi" />

        <Favorites>
          <Heart size={25} />
          <p>{favoritesPokemons && favoritesPokemons.length}</p>
        </Favorites>
      </LeftSide>
    </Container>
  );
};

export default Navbar;
