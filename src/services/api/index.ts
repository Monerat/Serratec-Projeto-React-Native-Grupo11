import axios, { AxiosResponse } from "axios";

const apiPokemon = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export interface Pokemon {
  id: number;
  name: string;
  sprites: Sprites;
  stats: PokemonStat[];
  types: PokemonTypes[];

}

interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  }
}

interface PokemonTypes {
  id: number;
  type: string
}

interface Sprites {
  other: {
    "official-artwork": {
      front_default: string;
    }
  },
}

interface PokemonResponse extends AxiosResponse<Pokemon> { }

export function getPokemon(id: number): Promise<PokemonResponse> {
  const url = `pokemon/${id}`;
  return apiPokemon.get(url)
}