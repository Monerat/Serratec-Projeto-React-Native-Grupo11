import elementFire from '../../assets/images/ElementFire.png'
import elementWater from '../../assets/images/ElementWater.png'
import elementBug from '../../assets/images/ElementBug.png'
import elementDark from '../../assets/images/ElementDark.png'
import elementDragon from '../../assets/images/ElementDragon.png'
import elementEletric from '../../assets/images/ElementEletric.png'
import elementFairy from '../../assets/images/ElementFary.png'
import elementFight from '../../assets/images/ElementFight.png'
import elementFly from '../../assets/images/ElementFlying.png'
import elementGhost from '../../assets/images/ElementGhost.png'
import elementGrass from '../../assets/images/ElementGrass.png'
import elementGround from '../../assets/images/ElementGround.png'
import elementIce from '../../assets/images/ElementIce.png'
import elementSteel from '../../assets/images/ElementMetal.png'
import elementNormal from '../../assets/images/ElementNormal.png'
import elementPoison from '../../assets/images/ElementPoison.png'
import elementPsychic from '../../assets/images/ElementPsychic.png'
import elementRock from '../../assets/images/ElementRock.png'
import elementToxic from '../../assets/images/ElementToxic.png'

export const barraType = (type?: string) => {
    switch (type) {
      case "normal":
        return elementNormal;
      case "fire":
        return elementFire;
      case "water":
        return elementWater;
      case "grass":
        return elementGrass;
      case "flying":
        return elementFly;
      case "fighting":
        return elementFight;
      case "poison":
        return elementPoison;
      case "electric":
        return elementEletric;
      case "ground":
        return elementWater;
      case "rock":
        return elementRock;
      case "psychic":
        return elementPsychic;
      case "ice":
        return elementIce;
      case "bug":
        return elementBug;
      case "ghost":
        return elementGhost;
      case "steel":
        return elementSteel;
      case "dragon":
        return elementDragon;
      case "dark":
        return elementDark;
      case "fairy":
        return elementFairy;
      default:
        return elementNormal
    }
  };