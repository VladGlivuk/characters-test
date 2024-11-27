import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { CharactersStore } from '@/core/types';
import { DEFAULT_CURRENT_PAGE, defaultPagination } from '@/core/utils/constants';
import { httpGetCharacterById, httpGetCharacters } from '@/services/api/requests';
import { mapHttpCharacterToCharacter, mapHttpPaginationToNextPage } from '@/core/utils/mappers';

const useCharactersStore = create<CharactersStore>()(
  devtools((set) => ({
    charactersList: [],
    character: null,
    pagination: defaultPagination,

    fetchCharacters: async (params) => {
      const charactersResponse = await httpGetCharacters(params);

      const charactersList = charactersResponse.results.map(mapHttpCharacterToCharacter);

      const nextPage = mapHttpPaginationToNextPage(charactersResponse);

      set({
        charactersList,
        pagination: {
          currentPage: params?.page ?? DEFAULT_CURRENT_PAGE,
          nextPage
        }
      });
    },

    fetchCharacterById: async (id) => {
      const characterResponse = await httpGetCharacterById(id);

      const character = mapHttpCharacterToCharacter(characterResponse);

      set((state) => ({
        character:
          state.charactersList.find((existedCharacter) => existedCharacter.id === id) ?? character
      }));
    },

    toggleFavorite: (id) => {
      set((state) => ({
        charactersList: state.charactersList.map((character) =>
          character.id === id ? { ...character, isFavorite: !character.isFavorite } : character
        ),
        character: state.character
          ? { ...state.character, isFavorite: !state.character.isFavorite }
          : state.character
      }));
    },

    editCharacterName: (id, name) => {
      set((state) => ({
        charactersList: state.charactersList.map((character) =>
          character.id === id ? { ...character, name } : character
        ),
        character: state.character ? { ...state.character, name } : state.character
      }));
    }
  }))
);

export default useCharactersStore;
