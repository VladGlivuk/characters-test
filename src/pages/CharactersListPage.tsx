import { FC } from 'react';
import ListCharacter from '@/components/ListCharacter';
import { Heading, SimpleGrid, Flex } from '@chakra-ui/react';
import useCharacters from '@/core/utils/hooks/useCharacters';

const CharactersListPage: FC = () => {
  const { charactersList, observerRef } = useCharacters();

  return (
    <div>
      <Heading margin={5} textAlign="center">
        <Flex flexDirection="column" alignItems="center" gap={4}>
          All Characters
        </Flex>
      </Heading>

      <SimpleGrid columns={[1, 2]} gap={8} margin={12}>
        {!!charactersList.length &&
          charactersList?.map((character) => (
            <ListCharacter character={character} key={character.id + character.name} />
          ))}
      </SimpleGrid>

      <div ref={observerRef} style={{ height: '40px', width: '100%' }}></div>
    </div>
  );
};

export default CharactersListPage;
