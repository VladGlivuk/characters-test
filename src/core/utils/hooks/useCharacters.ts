import { useState, useEffect } from 'react';
import { useInfiniteScroll } from './useInfiniteScroll';
import useCharactersStore from '@/store/characters/useCharactersStore';

function useCharacters() {
  const { pagination, fetchCharacters, charactersList, searchValue } = useCharactersStore();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        await fetchCharacters();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const { observerRef } = useInfiniteScroll({
    nextPage: pagination.nextPage,
    isLoading,
    asyncCallback: async () => {
      try {
        setIsLoading(true);

        await fetchCharacters({ page: pagination.nextPage!, search: searchValue });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  });

  return {
    charactersList,
    isLoading,
    observerRef
  };
}

export default useCharacters;
