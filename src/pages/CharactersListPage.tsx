import { FC } from 'react';
import ListCharacter from '@/components/ListCharacter';
import { Heading, SimpleGrid, Flex, Box, Spinner } from '@chakra-ui/react';
import useCharacters from '@/core/utils/hooks/useCharacters';

const CharactersListPage: FC = () => {
  const { charactersList, observerRef, isLoading } = useCharacters();

  return (
    <Box position="relative">
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

      {isLoading && (
        <Box textAlign="center" mt={10}>
          <Spinner size="xl" />
        </Box>
      )}

      <Box ref={observerRef} height={400} width="full" position="absolute" bottom="0"></Box>
    </Box>
  );
};

export default CharactersListPage;
