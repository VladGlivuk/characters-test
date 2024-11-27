import { User } from 'firebase/auth';
import { HttpCharactersParams } from './api';
import { Character } from './character';
import { Pagination } from './pagination';

export type CharactersStore = {
  charactersList: Array<Character>;
  character: Character | null;
  pagination: Pagination;
  fetchCharacters: (params?: HttpCharactersParams) => Promise<void>;
  fetchCharacterById: (id: number) => Promise<void>;
  toggleFavorite: (id: number) => void;
  editCharacterName: (id: number, name: string) => void;
};

export type UserStore = {
  user: User | null;
  setUser: (user: User | null) => void;
};
