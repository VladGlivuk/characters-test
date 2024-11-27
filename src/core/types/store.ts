import { HttpCharactersParams } from './api';
import { Character } from './character';
import { Pagination } from './pagination';

export type CharactersStore = {
  characters: Array<Character>;
  pagination: Pagination;
  fetchCharacters: (params?: HttpCharactersParams) => Promise<void>;
  fetchCharacterById: (id: number) => Promise<void>;
  toggleFavorite: (id: number) => void;
  editCharacterName: (id: number, name: string) => void;
};