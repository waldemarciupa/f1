import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import Layout from '../components/Layout';
import RacesList from '../components/RacesList/RacesList';

interface RacesProps {
  races: {
    id: String;
    season: String;
    round: String;
    name: String;
    location: String;
    country: String;
    url: String;
    sessions: {
      fp1: String;
      fp2: String;
      fp3: String;
      qualifying: String;
      gp: String;
    };
  }[];
}
const Home: NextPage<RacesProps> = ({ races }) => {
  return <Layout>{<RacesList races={races} />}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Races {
        races {
          id
          season
          round
          name
          location
          country
          url
          sessions {
            fp1
            fp2
            fp3
            qualifying
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
