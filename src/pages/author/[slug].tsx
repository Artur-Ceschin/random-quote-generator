import { Flex, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import { Footer } from '../../components/Footer';
import { Quote } from '../../components/Quote';
import { Random } from '../../components/Random';
import { api } from '../../services/api';
interface DataProps {
  _id: string;
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
}
interface HomeProps {
  data: DataProps[];
}

export default function Author(props: HomeProps) {
  const router = useRouter();

  return (
    <>
      <Flex direction="column" h="100%">
        <Random />
        <Flex direction="column" maxWidth="1024px" mx="auto">
          <Text fontSize="36px" fontWeight="700" my="50" ml="100px">
            {router.query.slug}
          </Text>
          <Flex direction="column" align="center" justify="center" w="100%">
            {props.data.map((quote) => (
              <Quote
                key={quote._id}
                quote={quote.quoteText}
                author={quote.quoteAuthor}
                genre={quote.quoteGenre}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const response = await api.get(`?author=${slug}`);
  const data = response.data.data;

  return {
    props: { data },
    revalidate: 60 * 60 * 24, //24 hours
  };
};
