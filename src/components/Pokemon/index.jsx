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

import bgGrass from "../../assets/bgGrass.jpg";
import bgWater from "../../assets/bgWater.jpg";
import bgBug from "../../assets/bgBug.jpg";
import bgFire from "../../assets/bgFire.jpg";
import bgNormal from "../../assets/bgNormal.jpg";
import bgPoison from "../../assets/bgPoison.jpg";
import bgElectric from "../../assets/bgElectric.jpg";
import bgGround from "../../assets/bgGround.jpg";
import bgFairy from "../../assets/bgFairy.jpg";
import bgFighting from "../../assets/bgFighting.jpg";
import bgRock from "../../assets/bgRock.jpg";
import bgPsychic from "../../assets/bgPsychic.jpg";
import bgGhost from "../../assets/bgGhost.png";
import bgIce from "../../assets/bgIce.jpg";
import bgDragon from "../../assets/bgDragon.jpg";
import bgDark from "../../assets/bgDark.jpg";
import bgSteel from "../../assets/bgSteel.jpg";

const Pokemon = (props) => {
  const { pokemon } = props;
  const type = pokemon.types[0].type.name;
  const pokemonImage =
    pokemon.sprites.versions["generation-v"]["black-white"].animated
      .front_default;

  const onHeartClick = () => {
    console.log("aqui");
  };

  const getBgCard = () => {
    switch (type) {
      case "grass":
        return bgGrass;
      case "water":
        return bgWater;
      case "fire":
        return bgFire;
      case "bug":
        return bgBug;
      case "normal":
        return bgNormal;
      case "electric":
        return bgElectric;
      case "ground":
        return bgGround;
      case "fairy":
        return bgFairy;
      case "poison":
        return bgPoison;
      case "fighting":
        return bgFighting;
      case "rock":
        return bgRock;
      case "psychic":
        return bgPsychic;
      case "ghost":
        return bgGhost;
      case "ice":
        return bgIce;
      case "dragon":
        return bgDragon;
      case "dark":
        return bgDark;
      case "steel":
        return bgSteel;
      default:
        break;
    }
  };

  const Card = styled.article`
    display: flex;
    align-items: center;
    box-shadow: 4px 4px 4px rgba(255, 255, 255, 0.25);
    border-radius: 5px;
    background: url(${getBgCard}) no-repeat center center;
    background-size: cover;
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
