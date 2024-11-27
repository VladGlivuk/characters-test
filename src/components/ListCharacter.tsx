import { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import { css } from '@emotion/react';
import { Box, Text, Stack, Flex, Link, Badge, Button, Input, Heading } from '@chakra-ui/react';
import { Character } from '@/core/types';
import { useNavigate } from 'react-router-dom';
import useCharactersStore from '@/store/characters/useCharactersStore';

type Props = {
  character: Character;
};

const cardStyles = css`
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  background-color: #f7fafc;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background-color: #edf2f7;
  }
`;

const CharacterCard: FC<Props> = ({
  character: {
    id,
    name,
    isFavorite,
    height,
    mass,
    gender,
    hairColor,
    skinColor,
    eyeColor,
    birthYear,
    homeworld,
    films,
    starships
  }
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newNameInputValue, setNewNameInputValue] = useState(name);

  const { toggleFavorite, editCharacterName } = useCharactersStore();

  const navigate = useNavigate();

  const cardClickHandler = () => {
    navigate(`/character/${id}`);
  };

  const toggleFavoriteHandler = (event: SyntheticEvent) => {
    event.stopPropagation();
    toggleFavorite(id);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewNameInputValue(event.target.value);
  };

  const saveName = (event: SyntheticEvent) => {
    event.stopPropagation();
    editCharacterName(id, newNameInputValue);
    setIsEditing(false);
  };

  const nameClickHandler = (event: SyntheticEvent) => {
    event.stopPropagation();
    setIsEditing(true);
  };

  return (
    <Box css={cardStyles} onClick={cardClickHandler}>
      <Stack spaceX={4} spaceY={4}>
        <Flex justifyContent="space-between">
          <Box display={'flex'} gap={'16px'}>
            {isEditing ? (
              <>
                <Input
                  value={newNameInputValue}
                  onChange={handleNameChange}
                  onClick={(event) => event.stopPropagation()}
                  placeholder="Enter new name"
                />
                <Button size="sm" colorScheme="teal" onClick={saveName}>
                  Save
                </Button>
              </>
            ) : (
              <Heading
                as="h2"
                size="lg"
                color="teal.500"
                onClick={nameClickHandler}
                cursor="pointer"
              >
                {name}
              </Heading>
            )}
          </Box>
          <Button color={isFavorite ? 'red' : 'teal'} onClick={toggleFavoriteHandler}>
            {isFavorite ? 'Unfavorite' : 'Favorite'}
          </Button>
        </Flex>
        <Text>
          <strong>Height:</strong> {height} cm
        </Text>
        <Text>
          <strong>Mass:</strong> {mass} kg
        </Text>
        <Text>
          <strong>Gender:</strong>
          <Badge color={gender === 'male' ? 'blue' : 'pink'}>{gender}</Badge>
        </Text>
        <Text>
          <strong>Hair Color:</strong> {hairColor}
        </Text>
        <Text>
          <strong>Skin Color:</strong> {skinColor}
        </Text>
        <Text>
          <strong>Eye Color:</strong> {eyeColor}
        </Text>
        <Text>
          <strong>Birth Year:</strong> {birthYear}
        </Text>
        <Text>
          <strong>Homeworld:</strong>{' '}
          <Link href={homeworld} color="teal.500">
            View Homeworld
          </Link>
        </Text>
        <Flex flexDirection="column">
          <strong>Films:</strong>
          <Stack spaceX={2} mt={2}>
            {films.map((film, index) => (
              <Box key={index}>
                <Link href={film} color="teal.500">
                  {film}
                </Link>
              </Box>
            ))}
          </Stack>
        </Flex>
        <Flex flexDirection="column">
          <strong>Starships:</strong>
          {starships.length > 0 ? (
            <Stack spaceX={2} mt={2}>
              {starships.map((starship, index) => (
                <Box key={index}>
                  <Link href={starship} color="teal.500">
                    {starship}
                  </Link>
                </Box>
              ))}
            </Stack>
          ) : (
            <Text mt={2}>None</Text>
          )}
        </Flex>
      </Stack>
    </Box>
  );
};

export default CharacterCard;
