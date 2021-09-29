import { Flex, Text } from '@chakra-ui/react';
import { Footer } from '../../components/Footer';
import { Quote } from '../../components/Quote';
import { Random } from '../../components/Random';
export default function Author() {
  return (
    <>
      <Random />
      <Flex direction="column" maxWidth="1024px" mx="auto">
        <Text fontSize="36px" fontWeight="700" my="50" ml="100px">
          Bill Gates
        </Text>
        <Flex direction="column" align="center" justify="center" w="100%">
          <Quote />
          <Quote />
          <Quote />
          <Quote />
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}
