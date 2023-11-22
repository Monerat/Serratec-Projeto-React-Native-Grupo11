import elementFire from "../../assets/images/ElementFire.png";
import elementWater from "../../assets/images/ElementWater.png";
import elementBug from "../../assets/images/ElementBug.png";
import elementDark from "../../assets/images/ElementDark.png";
import elementDragon from "../../assets/images/ElementDragon.png";
import elementEletric from "../../assets/images/ElementEletric.png";
import elementFairy from "../../assets/images/ElementFary.png";
import elementFight from "../../assets/images/ElementFight.png";
import elementFly from "../../assets/images/ElementFlying.png";
import elementGhost from "../../assets/images/ElementGhost.png";
import elementGrass from "../../assets/images/ElementGrass.png";
import elementGround from "../../assets/images/ElementGround.png";
import elementIce from "../../assets/images/ElementIce.png";
import elementSteel from "../../assets/images/ElementMetal.png";
import elementNormal from "../../assets/images/ElementNormal.png";
import elementPoison from "../../assets/images/ElementPoison.png";
import elementPsychic from "../../assets/images/ElementPsychic.png";
import elementRock from "../../assets/images/ElementRock.png";
import { Image, ImageSourcePropType } from "react-native";
import { styles } from "./styles";

const handleImageType = (type?: string): ImageSourcePropType => {
  const barType:Record<string,ImageSourcePropType> = {
    normal: elementNormal,
    fire: elementFire,
    water: elementWater,
    grass: elementGrass,
    flying: elementFly,
    fighting: elementFight,
    poison: elementPoison,
    electric: elementEletric,
    ground: elementGround,
    rock: elementRock,
    psychic: elementPsychic,
    ice: elementIce,
    bug: elementBug,
    ghost: elementGhost,
    steel: elementSteel,
    dragon: elementDragon,
    dark: elementDark,
    fairy: elementFairy
  }
  return barType[type??''] ?? elementNormal
};

interface BarraTypeProp {
  pokemonType: string;
  tamanho: "Large" | "Small" | undefined;
}

export const BarraType = (item: BarraTypeProp) => {
  return (
    <Image
      style={item.tamanho === "Large" ? styles.imageLarge : styles.imageSmall}
      source={handleImageType(item.pokemonType)}
    />
  );
};
