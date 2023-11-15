import axios, { AxiosResponse } from "axios";

const apiDigimon = axios.create({
  baseURL: "https://digi-api.com/api/v1/",
});

interface Digimon {
  id: number;
  name: string;
  xAntibody: boolean;
  images: { href: string; transparent: boolean }[];
  levels: { id: number; level: string }[];
  types: { id: number; type: string }[];
  attributes: { id: number; attribute: string }[];
  fields: { id: number; field: string; image: string }[];
  origin: string;
  language: string;
  description: string;
  skills: {
    id: number;
    skill: string;
    translation: string;
    description: string;
  }[];
  priorEvolutions: {
    id: number;
    digimon: string;
    condition: string;
    image: string;
    url: string;
  }[];
  nextEvolutions: {
    id: number;
    digimon: string;
    condition: string;
    image: string;
    url: string;
  }[];
}

interface DigimonDetailsResponse extends AxiosResponse<Digimon, any> {}
interface DigimonListResponse
  extends AxiosResponse<{ count: number; results: Digimon[] }, any> {}

export function getDigimonDetails(
  idOrName: string
): Promise<DigimonDetailsResponse> {
  const url = `digimon/${idOrName}`;
  return apiDigimon.get(url);
}

export function getDigimonList(
  name?: string,
  attribute?: string,
  xAntibody?: boolean,
  level?: string,
  page?: number,
  pageSize?: number
): Promise<DigimonListResponse> {
  const url = "digimon";
  const params = { name, attribute, xAntibody, level, page, pageSize };

  return apiDigimon.get(url, { params });
}
