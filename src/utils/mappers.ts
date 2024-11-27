import {
  HttpCharacter,
  HttpPagination,
} from "../services/api/types";
import { Character, Pagination } from "../store/characters/types";

export function mapHttpCharacterToCharacter(
  httpCharacter: HttpCharacter
): Character {
  return {
    ...httpCharacter,
    id: Number(httpCharacter.url.split("/").slice(-2, -1).at(0)),
    isFavorite: false,
    birthYear: httpCharacter.birth_year,
    eyeColor: httpCharacter.eye_color,
    hairColor: httpCharacter.hair_color,
    skinColor: httpCharacter.skin_color,
    created: new Date(httpCharacter.created),
    edited: new Date(httpCharacter.edited),
  };
}

export function mapHttpPaginationToPagination(
  httpPagination: HttpPagination
): Pagination {
  return {
    currentPage: httpPagination.count,

    previousPage: httpPagination.previous
      ? Number(httpPagination.previous.split("=").at(-1))
      : null,

    nextPage: httpPagination.next
      ? Number(httpPagination.next.split("=").at(-1))
      : null,
  };
}
