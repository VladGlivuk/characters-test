import { FC, useEffect } from 'react';
import { css } from '@emotion/react';
import { Box, Heading, Text, Badge, Stack, Link, SimpleGrid, Button, Flex } from '@chakra-ui/react';
import useCharactersStore from '@/store/characters/useCharactersStore';
import { useParams } from 'react-router-dom';

const cardStyles = css`
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  background-color: #f7fafc;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Character: FC = () => {
  const { id } = useParams();

  if (!id) return <div>There is no such Character</div>;

  const { fetchCharacterById, toggleFavorite, character } = useCharactersStore();

  useEffect(() => {
    if (character?.id !== +id) {
      (async () => await fetchCharacterById(+id))();
    }
  }, []);

  if (!character) {
    return <div></div>;
  }

  const {
    name,
    isFavorite,
    birthYear,
    gender,
    height,
    mass,
    hairColor,
    eyeColor,
    skinColor,
    homeworld,
    films,
    starships,
    species,
    vehicles,
    created,
    edited
  } = character;

  const toggleFavoriteHandler = () => {
    toggleFavorite(+id);
  };

  return (
    <Box maxWidth="900px" margin="auto" padding="6" css={cardStyles}>
      <Flex justify="space-between" align="center">
        <Heading as="h1" size="lg" color="teal.500">
          {name}
        </Heading>
        <Button color={isFavorite ? 'red' : 'teal'} onClick={toggleFavoriteHandler}>
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </Button>
      </Flex>

      <Stack gap={4} marginTop={6}>
        <Text>
          <strong>Birth Year:</strong> {birthYear}
        </Text>
        <Text>
          <strong>Gender:</strong>{' '}
          <Badge color={gender === 'male' ? 'blue' : 'pink'}>{gender}</Badge>
        </Text>
        <Text>
          <strong>Height:</strong> {height} cm
        </Text>
        <Text>
          <strong>Mass:</strong> {mass} kg
        </Text>
        <Text>
          <strong>Hair Color:</strong> {hairColor}
        </Text>
        <Text>
          <strong>Eye Color:</strong> {eyeColor}
        </Text>
        <Text>
          <strong>Skin Color:</strong> {skinColor}
        </Text>
        <Text>
          <strong>Homeworld:</strong>{' '}
          <Link href={homeworld} color="teal.500">
            View Homeworld
          </Link>
        </Text>
      </Stack>

      <SimpleGrid columns={[1, 2]} gap={4} marginTop={8}>
        <Box>
          <Heading as="h3" size="md" marginBottom={4} color="teal.400">
            Films
          </Heading>
          {!!films.length ? (
            <Stack gap={2}>
              {films.map((film: string, index: number) => (
                <Link key={index} href={film} color="teal.500">
                  Film {index + 1}
                </Link>
              ))}
            </Stack>
          ) : (
            <Text>No films available.</Text>
          )}
        </Box>
        <Box>
          <Heading as="h3" size="md" marginBottom={4} color="teal.400">
            Starships
          </Heading>
          {starships.length > 0 ? (
            <Stack gap={2}>
              {starships.map((starship, index) => (
                <Link key={index} href={starship} color="teal.500">
                  Starship {index + 1}
                </Link>
              ))}
            </Stack>
          ) : (
            <Text>No starships available.</Text>
          )}
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={[1, 2]} gap={4} marginTop={8}>
        <Box>
          <Heading as="h3" size="md" marginBottom={4} color="teal.400">
            Species
          </Heading>
          {species.length > 0 ? (
            <Stack gap={2}>
              {species.map((specie, index) => (
                <Link key={index} href={specie} color="teal.500">
                  Species {index + 1}
                </Link>
              ))}
            </Stack>
          ) : (
            <Text>No species available.</Text>
          )}
        </Box>
        <Box>
          <Heading as="h3" size="md" marginBottom={4} color="teal.400">
            Vehicles
          </Heading>
          {vehicles.length > 0 ? (
            <Stack gap={2}>
              {vehicles.map((vehicle, index) => (
                <Link key={index} href={vehicle} color="teal.500">
                  Vehicle {index + 1}
                </Link>
              ))}
            </Stack>
          ) : (
            <Text>No vehicles available.</Text>
          )}
        </Box>
      </SimpleGrid>

      <Text marginTop={6}>
        <strong>Created:</strong> {created.toLocaleString()}
      </Text>
      <Text>
        <strong>Edited:</strong> {edited.toLocaleString()}
      </Text>
    </Box>
  );
};

export default Character;
