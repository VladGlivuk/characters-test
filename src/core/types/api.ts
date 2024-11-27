export type HttpCharactersParams = {
  search?: string;
  page?: number;
};

export type HttpCharacter = {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  url: string;
  created: string; // ISO 8601 date
  edited: string; // ISO 8601 date
};

export type HttpPagination = {
  count: number;
  next: string | null;
  previous: string | null;
}

export type HttpPaginatedCharacters = HttpPagination & {
  results: Array<HttpCharacter>;
};
