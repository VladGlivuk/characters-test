import { FC } from 'react';
import { css } from '@emotion/react';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Character } from '@/core/types';
import useCharactersStore from '@/store/characters/useCharactersStore';

const cardStyles = css`
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  background-color: #f7fafc;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

type Props = {
  character: Character;
};
const Favorite: FC<Props> = ({ character }) => {
  const { toggleFavorite } = useCharactersStore();

  return (
    <Box css={cardStyles}>
      <Flex justify="space-between" align="center" marginBottom="4">
        <Heading as="h3" size="md" color="teal.500">
          {character.name}
        </Heading>
        <Button color="red" size="sm" onClick={() => toggleFavorite(character.id)}>
          Unfavorite
        </Button>
      </Flex>
      <Text>
        <strong>ID:</strong> {character.id}
      </Text>
    </Box>
  );
};

export default Favorite;
