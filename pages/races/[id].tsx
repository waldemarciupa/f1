import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { gql } from '@apollo/client';
import client from '../../apollo-client';
import Layout from '../../components/Layout';
import Schedule from '../../components/Schedule/Schedule';

const Race: NextPage = ({ race }) => {
  return (
    <Layout title={race.name}>
      <Schedule sessions={race.sessions} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query Races {
        races {
          id
        }
      }
    `,
  });

  const paths = data.races.map((race: any) => ({
    params: { id: race.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { data } = await client.query({
    variables: { id: params.id },
    query: gql`
      query Race($id: String!) {
        race(id: $id) {
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
      race: data.race,
    },
  };
};

export default Race;
