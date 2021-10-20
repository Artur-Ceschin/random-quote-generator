import { Flex, Text } from '@chakra-ui/react';

export function Footer() {
  return (
    <Flex as="footer" justify="center" p="6">
      <Text opacity="0.6" fontSize="14px">
        Created by{' '}
        <Text fontWeight="700" display="inline" as="u">
          Artur-Ceschin
        </Text>
        - devChallenges.io
      </Text>
    </Flex>
  );
}
