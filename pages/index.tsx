import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import Layout from '../components/Layout';
import RacesList from '../components/RacesList/RacesList';

interface RacesProps {
  races: {
    name: string;
    date: Date;
    time: Date;
    circuit: {
      id: string;
    };
  }[];
}

const Home: NextPage<RacesProps> = ({ races }) => {
  return (
    <Layout>
      <RacesList races={races} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query RacesByYear {
        racesByYear(year: "2022") {
          name
          circuit {
            id
          }
          date
          time
        }
      }
    `,
  });

  return {
    props: {
      races: data.racesByYear,
    },
  };
};

export default Home;
