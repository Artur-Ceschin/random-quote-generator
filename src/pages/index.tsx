import { Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { Footer } from '../components/Footer';
import { Quote } from '../components/Quote';
import { Random } from '../components/Random';
import api from '../services/api';

interface DataProps {
  _id: string;
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
}

interface QuoteProps {
  data: DataProps[];
}

interface HomeProps {
  quotes: QuoteProps;
}

export default function Home(props: HomeProps) {
  return (
    <Flex direction="column" height="100vh">
      <Random />
      <Flex
        mx="auto"
        align="center"
        justify="center"
        w="100%"
        maxWidth="1024px"
        h="100%"
      >
        {props.quotes.data.map((data) => (
          <Quote
            key={data._id}
            quote={data.quoteText}
            author={data.quoteAuthor}
            genre={data.quoteGenre}
          />
        ))}
      </Flex>
      <Footer />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/random');
  const data = response.data;

  return {
    props: {
      quotes: data,
    },
    revalidate: 60 * 60 * 8,
  };
};
