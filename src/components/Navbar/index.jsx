import { Container, Logo } from "./styles";

const Navbar = () => {
  const logo =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <Container>
      <Logo src={logo} alt="PokeApi" />
    </Container>
  );
};

export default Navbar;
