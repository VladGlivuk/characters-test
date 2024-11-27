import { FC, useEffect } from 'react';
import ListCharacter from '@/components/ListCharacter';
import { Heading, SimpleGrid, Flex } from '@chakra-ui/react';
import useCharactersStore from '@/store/characters/useCharactersStore';
import LogoutButton from '@/components/LogoutButton';

const CharactersListPage: FC = () => {
  const { fetchCharacters, charactersList } = useCharactersStore();

  useEffect(() => {
    if (!charactersList.length) {
      (async () => {
        await fetchCharacters();
      })();
    }
  }, []);

  return (
    <div>
      <Heading margin={5} textAlign="center">
        <Flex flexDirection="column" alignItems="center" gap={4}>
          All Characters
          <LogoutButton />
        </Flex>
      </Heading>

      <SimpleGrid columns={[1, 2]} gap={8} margin={12}>
        {!!charactersList.length &&
          charactersList?.map((character) => (
            <ListCharacter character={character} key={character.id + character.name} />
          ))}
      </SimpleGrid>
    </div>
  );
};

export default CharactersListPage;
