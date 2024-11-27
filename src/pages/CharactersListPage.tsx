import { FC, useEffect } from 'react';
import ListCharacter from '@/components/ListCharacter';
import { Heading, SimpleGrid } from '@chakra-ui/react';
import useCharactersStore from '../store/characters/useCharactersStore';

const CharactersListPage: FC = () => {
  const { fetchCharacters, characters } = useCharactersStore();

  useEffect(() => {
    (async () => {
      await fetchCharacters();
    })();
  }, []);

  return (
    <div>
      <Heading margin={5} textAlign={'center'}>
        All Characters
      </Heading>

      <SimpleGrid columns={[1, 2]} gap={8} margin={12}>
        {!!characters.length && characters?.map((character) => <ListCharacter character={character} key={character.url + character.created} />)}
      </SimpleGrid>
    </div>
  );
};

export default CharactersListPage;
