import styled from "styled-components";

import {
  Button,
  CardBody,
  CardBodyBottom,
  CardBodyTop,
  Id,
  Image,
  Title,
  Type,
  Types,
  Heart,
} from "./styles";

const Pokemon = (props) => {
  const { pokemon } = props;
  const type = pokemon.types[0].type.name;
  const pokemonImage =
    pokemon.sprites.versions["generation-v"]["black-white"].animated
      .front_default;

  const onHeartClick = () => {
    console.log("aqui");
  };

  const getBgCardColor = () => {
    switch (type) {
      case "grass":
        return "green";
      case "water":
        return "blue";
      case "fire":
        return "orangered";
      case "bug":
        return "lightgreen";
      case "normal":
        return "lightgray";
      case "electric":
        return "yellow";
      case "ground":
        return "lightyellow";
      case "fairy":
        return "lightpink";
      case "poison":
        return "#90d773";
      case "fighting":
        return "maroon";
      case "rock":
        return "brown";
      case "psychic":
        return "purple";
      case "ghost":
        return "gray";
      case "ice":
        return "slateblue";
      case "dragon":
        return "gold";
      case "dark":
        return "#2f2f2f";
      case "steel":
        return "darkgray";
      default:
        break;
    }
  };

  const Card = styled.article`
    display: flex;
    box-shadow: 4px 4px 4px rgba(255, 255, 255, 0.25);
    border-radius: 5px;
    background-color: ${getBgCardColor};
    padding: 1rem;
  `;

  return (
    <Card>
      <Image src={pokemonImage} alt={pokemon.name} />
      <CardBody>
        <CardBodyTop>
          <Title>{pokemon.name}</Title>
          <Id>#{pokemon.id}</Id>
        </CardBodyTop>

        <CardBodyBottom>
          <Types>
            {pokemon.types.map((item, id) => (
              <Type key={id}>{item.type.name}</Type>
            ))}
          </Types>
          <Button onClick={onHeartClick}>
            <Heart size={20} />
          </Button>
        </CardBodyBottom>
      </CardBody>
    </Card>
  );
};

export default Pokemon;
