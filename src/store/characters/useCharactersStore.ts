import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { CharactersStore } from '@/core/types';
import { DEFAULT_CURRENT_PAGE, defaultPagination } from '@/core/utils/constants';
import { httpGetCharacterById, httpGetCharacters } from '@/services/api/requests';
import { mapHttpCharacterToCharacter, mapHttpPaginationToNextPage } from '@/core/utils/mappers';

const useCharactersStore = create<CharactersStore>()(
  devtools((set) => ({
    characters: [],
    pagination: defaultPagination,

    fetchCharacters: async (params) => {
      const charactersResponse = await httpGetCharacters(params);

      const characters = charactersResponse.results.map(mapHttpCharacterToCharacter);

      const nextPage = mapHttpPaginationToNextPage(charactersResponse);

      set({
        characters,
        pagination: {
          currentPage: params?.page ?? DEFAULT_CURRENT_PAGE,
          nextPage
        }
      });
    },

    fetchCharacterById: async (id) => {
      const characterResponse = await httpGetCharacterById(id);

      const character = mapHttpCharacterToCharacter(characterResponse);

      const characters = [character];

      set({ characters });
    },

    toggleFavorite: (id) => {
      set((state) => ({
        characters: state.characters.map((character) =>
          character.id === id ? { ...character, isFavorite: !character.isFavorite } : character
        )
      }));
    },

    editCharacterName: (id, name) => {
      set((state) => ({
        characters: state.characters.map((character) =>
          character.id === id ? { ...character, name } : character
        )
      }));
    }
  }))
);

export default useCharactersStore;
