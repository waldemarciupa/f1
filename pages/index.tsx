import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import RacesList from '../components/RacesList/RacesList';

interface RacesProps {
  races: {
    raceName: string;
    round: string;
    date: Date;
    time: Date;
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
  const res = await fetch('http://ergast.com/api/f1/2022/races.json');
  const data = await res.json();
  const races = data.MRData.RaceTable.Races;

  return {
    props: {
      races,
    },
  };
};

export default Home;
