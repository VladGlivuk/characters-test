import { FC } from 'react';
import { css } from '@emotion/react';
import { Box, Flex, Input, Button, Spacer, Text, Link, HStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import useUserStore from '@/store/user/useUserStore';
import useCharactersStore from '@/store/characters/useCharactersStore';

const headerStyles = css`
  padding: 16px;
  background-color: #2d3748;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Header: FC = () => {
  const navigate = useNavigate();

  const { user } = useUserStore();
  const { searchValue, onChangeSearchValueHandler, searchCharacters } = useCharactersStore();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeSearchValueHandler(event.target.value);
  };

  const handleSearch = async () => {
    await searchCharacters({ search: searchValue });
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Box as="header" css={headerStyles}>
      <Flex align="center">
        <Text marginRight={4} color="teal.200">
          Welcome, {user?.displayName}
        </Text>
        <Spacer />
        <HStack gap={8}>
          <Link
            color="teal.200"
            onClick={() => handleNavigate('/characters')}
            _hover={{ color: 'teal.400' }}
          >
            All Characters
          </Link>
          <Link
            color="teal.200"
            onClick={() => handleNavigate('/favorites')}
            _hover={{ color: 'teal.400' }}
          >
            Favorites
          </Link>
        </HStack>
        <Spacer />
        <Flex align="center">
          <Input
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search..."
            size="sm"
            width="200px"
            marginRight={4}
          />
          <Button onClick={handleSearch} colorScheme="teal" size="sm">
            Search
          </Button>
        </Flex>
        <Spacer />
        <LogoutButton />
      </Flex>
    </Box>
  );
};

export default Header;
