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

export async function getRandomPokemons(count: number): Promise<Pokemon[]> {
  const randomPokemons: Pokemon[] = [];
  try {
    const randomIds = generateRandomPokemonIds(count);
    const detailedPokemons = await Promise.all(
      randomIds.map((id) => getPokemonDetails(id.toString()))
    );

    detailedPokemons.sort((a, b) => {
      const avgStatA = calculateAverageStat(a);
      const avgStatB = calculateAverageStat(b);
      return avgStatB - avgStatA;
    });

    const topPokemons = detailedPokemons.slice(0, Math.ceil(count / 3));
    const bottomPokemons = detailedPokemons.slice(-Math.floor((2 * count) / 3));

    const shuffledPokemons = shuffleArray([...topPokemons, ...bottomPokemons]);

    return shuffledPokemons;
  } catch (error) {
    throw error;
  }
}

function generateRandomPokemonIds(count: number): number[] {
  const randomIds: number[] = [];
  for (let i = 0; i < count; i++) {
    const randomId = Math.floor(Math.random() * 1000) + 1;
    randomIds.push(randomId);
  }
  return randomIds;
}

function calculateAverageStat(pokemon: Pokemon): number {
  const totalStats = pokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0);
  return totalStats / pokemon.stats.length;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

async function getPokemonDetails(name: string): Promise<Pokemon> {
  try {
    const response = await apiPokemon.get<Pokemon>(`pokemon/${name}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
