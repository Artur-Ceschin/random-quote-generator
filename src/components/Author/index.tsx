import { Text, Flex, Link, Icon } from '@chakra-ui/react';
import { useState } from 'react';

interface AuthorProps {
  author: string;
  genre: string;
}

import { MdTrendingFlat } from 'react-icons/md';
export function Author({ author, genre }: AuthorProps) {
  const [isShown, setIsShown] = useState(false);
  return (
    <Flex
      ml="100px"
      mt="100"
      w={['60%', '80%', '80%', '100%']}
      _hover={{
        background: '#333333',
        color: '#F2F2F2',
      }}
      p="45"
      pl="4"
      transition="0.4s linear"
      justify="space-between"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <Flex direction="column">
        <Text fontSize="24px" fontWeight="bold">
          {author}
        </Text>
        <Text fontSize="14px" opacity="0.6" mt="3">
          {genre}
        </Text>
      </Flex>
      {isShown && (
        <Link href={`author/${author}`} focusVisible="false">
          <Icon
            as={MdTrendingFlat}
            w={14}
            h={14}
            color="white"
            cursor="pointer"
            outline="0"
          />
        </Link>
      )}
    </Flex>
  );
}
