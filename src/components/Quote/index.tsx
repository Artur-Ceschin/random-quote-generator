import { Text, Flex, Link, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { Author } from '../Author';

interface QuoteProps {
  quote: string;
  author: string;
  genre: string;
}

export function Quote({ quote, author, genre }: QuoteProps) {
  const { asPath } = useRouter();
  const isHome = asPath === '/';
  return (
    <Flex direction="column" my="30">
      <Text
        fontSize={['22px', '24px', '32px']}
        fontWeight="500"
        lineHeight="43px"
        borderLeft="10px solid"
        borderColor="yellow.300"
        pl="100px"
        marginRight={['50px', '10']}
        minWidth={['0', '0', '0', '1100px']}

        // maxWidth="1100px"
      >
        {quote}
      </Text>
      {isHome && <Author author={author} genre={genre} />}
    </Flex>
  );
}
