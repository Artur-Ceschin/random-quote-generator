import { Flex, Text, Icon } from '@chakra-ui/react';
import { Footer } from '../components/Footer';
import { Quote } from '../components/Quote';
import { Random } from '../components/Random';

export default function Home() {
  return (
    <Flex direction="column">
      <Random />
      <Flex
        mx="auto"
        align="center"
        justify="center"
        w="100%"
        maxWidth="1024px"
        h="80vh"
      >
        <Quote />
      </Flex>
      <Footer />
    </Flex>
  );
}
