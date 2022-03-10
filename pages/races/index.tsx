import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { gql } from '@apollo/client';
import client from '../../apollo-client';
import Layout from '../../components/Layout';
import RacesList from '../../components/RacesList/RacesList';

interface RacesProps {
  races: {
    id: string;
    season: string;
    round: string;
    name: string;
    location: string;
    country: string;
    url: string;
    circuit: {
      id: string;
      name: string;
      location: string;
      country: string;
      firstGrandPrix: string;
      numberOfLaps: string;
      circuitLength: string;
      raceDistance: string;
      url: string;
    };
    sessions: {
      fp1: string;
      fp2: string;
      fp3: string;
      qualifying: string;
      gp: string;
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
          url
          circuit {
            id
            name
            location
            country
            firstGrandPrix
            numberOfLaps
            circuitLength
            raceDistance
            url
          }
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
