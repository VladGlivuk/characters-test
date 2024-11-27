import { FC, useMemo } from 'react';
import { Box, SimpleGrid, Text, Heading } from '@chakra-ui/react';
import useCharactersStore from '@/store/characters/useCharactersStore';
import { Link } from 'react-router-dom';
import Favorite from '@/components/Favorite';

const FavoritesPage: FC = () => {
  const { charactersList } = useCharactersStore();

  const favorites = useMemo(
    () => charactersList.filter(({ isFavorite }) => isFavorite),
    [charactersList]
  );

  if (!favorites.length) {
    return (
      <Box textAlign="center" marginTop="20">
        <Heading size="md" color="gray.500">
          No favorite characters yet.
        </Heading>
        <Text marginTop="4">
          Go back to the{' '}
          <Link to="/" style={{ color: 'teal' }}>
            main page
          </Link>{' '}
          to add some!
        </Text>
      </Box>
    );
  }

  return (
    <Box maxWidth="1200px" margin="auto" padding="6">
      <Heading as="h1" size="lg" marginBottom="6" color="teal.500">
        Favorite Characters
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} gap="6">
        {favorites.map((character) => (
          <Favorite character={character} key={character.id + character.name} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FavoritesPage;
