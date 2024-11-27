import { useState, useEffect } from 'react';
import { useInfiniteScroll } from './useInfiniteScroll';
import useCharactersStore from '@/store/characters/useCharactersStore';

function useCharacters() {
  const { pagination, fetchCharacters, charactersList } = useCharactersStore();

  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        if (searchValue) {
          await fetchCharacters({ search: searchValue });
        } else {
          await fetchCharacters();
        }
        await fetchCharacters();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [searchValue, fetchCharacters]);

  const { observerRef } = useInfiniteScroll({
    nextPage: pagination.nextPage,
    isLoading,
    asyncCallback: async () => {
      try {
        setIsLoading(true);

        // non-null assertion
        // asyncCallback will not fire if nextPage is empty value
        await fetchCharacters({ page: pagination.nextPage! });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  });

  const searchChangeHandler = (value: string) => {
    setSearchValue(value);
  };

  return {
    charactersList,
    isLoading,
    observerRef,
    searchChangeHandler
  };
}

export default useCharacters;
