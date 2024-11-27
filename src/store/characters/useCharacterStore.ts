import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {
  httpGetCharacterById,
  httpGetCharacters,
} from "../../services/api/requests";
import {
  mapHttpCharacterToCharacter,
  mapHttpPaginationToPagination,
} from "../../utils/mappers";
import { HttpCharactersParams } from "../../services/api/types";
import { CharactersStore } from "./types";

const useCharacterStore = create<CharactersStore>()(
  devtools((set) => ({
    characters: [],

    pagination: {
      currentPage: 1,
      previousPage: null,
      nextPage: null,
    },

    fetchCharacters: async (params: HttpCharactersParams) => {
      const charactersResponse = await httpGetCharacters(params);

      const characters = charactersResponse.results.map(
        mapHttpCharacterToCharacter
      );

      const pagination = mapHttpPaginationToPagination(charactersResponse);

      set({ characters, pagination });
    },

    fetchCharacterById: async (id: number) => {
      const characterResponse = await httpGetCharacterById(id);

      const character = mapHttpCharacterToCharacter(characterResponse);

      const characters = [character];

      set({ characters });
    },

    toggleFavorite: (id: number) => {
      set((state) => ({
        characters: state.characters.map((character) =>
          character.id === id
            ? { ...character, isFavorite: !character.isFavorite }
            : character
        ),
      }));
    },

    editCharacterName: (id: number, name: string) => {
      set((state) => ({
        characters: state.characters.map((character) =>
          character.id === id ? { ...character, name } : character
        ),
      }));
    },
  }))
);

export default useCharacterStore;
