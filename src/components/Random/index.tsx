import { Flex, Text, Icon } from '@chakra-ui/react';
import { MdLoop } from 'react-icons/md';
export function Random() {
  return (
    <Flex p="10" justify="right" cursor="pointer">
      <Text fontSize="18px" color="#333333" mr="2">
        random
      </Text>
      <Icon as={MdLoop} w={6} h={6} />
    </Flex>
  );
}
