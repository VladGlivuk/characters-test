import { HttpCharactersParams } from "../../services/api/types";

export type Character = {
  id: number;
  isFavorite: boolean;
  name: string;
  birthYear: string;
  eyeColor: string;
  gender: string;
  hairColor: string;
  height: string;
  mass: string;
  skinColor: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  url: string;
  created: Date;
  edited: Date;
};

export type Pagination = {
  currentPage: number;
  previousPage: number | null;
  nextPage: number | null;
};

export type CharactersStore = {
  characters: Array<Character>;
  pagination: Pagination;
  fetchCharacters: (params: HttpCharactersParams) => Promise<void>;
  fetchCharacterById: (id: number) => Promise<void>;
  toggleFavorite: (id: number) => void;
  editCharacterName: (id: number, name: string) => void;
};
