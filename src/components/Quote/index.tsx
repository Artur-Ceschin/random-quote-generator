import { Text, Flex, Link, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { Author } from '../Author';

export function Quote() {
  const { asPath } = useRouter();
  const isHome = asPath === '/';
  return (
    <Flex direction="column" my="30">
      <Text
        fontSize="32px"
        fontWeight="500"
        lineHeight="43px"
        borderLeft="10px solid"
        borderColor="yellow.300"
        pl="100px"
        maxWidth="1100px"
      >
        “The first rule of any technology used in a business is that automation
        applied to an efficient operation will magnify the efficiency. The
        second is that automation applied to an inefficient operation will
        magnify the inefficiency.”
      </Text>
      {isHome && <Author />}
    </Flex>
  );
}
