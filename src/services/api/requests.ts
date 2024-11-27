import axiosInstance from './axiosInstance';
import { HttpCharactersParams, HttpPaginatedCharacters, HttpCharacter } from '@/core/types';

export async function httpGetCharacters(params?: HttpCharactersParams) {
  const response = await axiosInstance.get<HttpPaginatedCharacters>('people', {
    params,
  });

  return response.data;
}

export async function httpGetCharacterById(id: number) {
  const response = await axiosInstance.get<HttpCharacter>(`people/${id}`);

  return response.data;
}
