import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { gql } from '@apollo/client';
import client from '../../apollo-client';
import Layout from '../../components/Layout';
import RacesList from '../../components/RacesList/RacesList';

interface RacesProps {
  races: {
    id: string;
    name: string;
    circuit: {
      country: string;
    };
    sessions: {
      gp: string;
    };
  }[];
}
const Home: NextPage<RacesProps> = ({ races }) => {
  return <Layout title='F1 - Races'>{<RacesList races={races} />}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Races {
        races {
          id
          name
          circuit {
            country
          }
          sessions {
            gp
          }
        }
      }
    `,
  });

  return {
    props: {
      races: data.races,
    },
  };
};

export default Home;
