import { HttpCharacter, HttpPagination } from '@/core/types';
import { Character, Pagination } from '@/core/types';

export function mapHttpCharacterToCharacter(httpCharacter: HttpCharacter): Character {
  return {
    ...httpCharacter,
    id: Number(httpCharacter.url.split('/').slice(-2, -1).at(0)),
    isFavorite: false,
    birthYear: httpCharacter.birth_year,
    eyeColor: httpCharacter.eye_color,
    hairColor: httpCharacter.hair_color,
    skinColor: httpCharacter.skin_color,
    created: new Date(httpCharacter.created),
    edited: new Date(httpCharacter.edited)
  };
}

export function mapHttpPaginationToNextPage(
  httpPagination: HttpPagination
): Pagination['nextPage'] {
  return httpPagination.next ? Number(httpPagination.next.split('=').at(-1)) : null;
}
