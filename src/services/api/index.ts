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
  type: {
    name: string;
  }
}

interface Sprites {
  other: {
    "official-artwork": {
      front_default: string;
    }
  },
}

interface PokemonList {
  count: number;
  next: string;
  previous: string;
  results: Results[];
}

interface Results {
  name: string;
  url: string;
}

interface PokemonResponse extends AxiosResponse<Pokemon> { }

interface PokemonListResponse extends AxiosResponse<PokemonList> { }

export function getAllPokemons(): Promise<PokemonListResponse> {
  const url = "pokemon";
  return apiPokemon.get(url)
}

export function getMorePokemons(url: string): Promise<PokemonListResponse>{
  return apiPokemon.get(url)
}

export function getPokemon(id: number): Promise<PokemonResponse> {
  const url = `pokemon/${id}`;
  return apiPokemon.get(url)
}