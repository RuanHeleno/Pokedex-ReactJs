import { Container, Favorites, Heart, LeftSide, Logo } from "./styles";

const Navbar = () => {
  const logo =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <Container>
      <LeftSide>
        <Logo src={logo} alt="PokeApi" />

        <Favorites>
          <Heart size={25} />
          <p>Favoritos</p>
        </Favorites>
      </LeftSide>
    </Container>
  );
};

export default Navbar;
