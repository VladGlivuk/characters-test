/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Box, Heading, Text, Stack, Flex, Link, Badge } from '@chakra-ui/react';
import { Character } from '../core/types/types';

interface CharacterCardProps {
  character: Character;
}

const cardStyles = css`
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  background-color: #f7fafc;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: #edf2f7;
  }
`;

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Box css={cardStyles}>
      <Stack spaceX={4} spaceY={4}>
        <Heading as='h2' size='lg' color='teal.500'>
          {character.name}
        </Heading>
        <Text>
          <strong>Height:</strong> {character.height} cm
        </Text>
        <Text>
          <strong>Mass:</strong> {character.mass} kg
        </Text>
        <Text>
          <strong>Gender:</strong> <Badge colorScheme={character.gender === 'male' ? 'blue' : 'pink'}>{character.gender}</Badge>
        </Text>
        <Text>
          <strong>Hair Color:</strong> {character.hairColor}
        </Text>
        <Text>
          <strong>Skin Color:</strong> {character.skinColor}
        </Text>
        <Text>
          <strong>Eye Color:</strong> {character.eyeColor}
        </Text>
        <Text>
          <strong>Birth Year:</strong> {character.birthYear}
        </Text>
        <Text>
          <strong>Homeworld:</strong>{' '}
          <Link href={character.homeworld} color='teal.500'>
            View Homeworld
          </Link>
        </Text>
        <Flex flexDirection='column'>
          <strong>Films:</strong>
          <Stack spaceX={2} mt={2}>
            {character.films.map((film, index) => (
              <Box key={index}>
                <Link href={film} color='teal.500'>
                  {film}
                </Link>
              </Box>
            ))}
          </Stack>
        </Flex>
        <Flex flexDirection='column'>
          <strong>Starships:</strong>
          {character.starships.length > 0 ? (
            <Stack spaceX={2} mt={2}>
              {character.starships.map((starship, index) => (
                <Box key={index}>
                  <Link href={starship} color='teal.500'>
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
