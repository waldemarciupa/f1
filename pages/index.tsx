import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Layout from '../components/Layout';

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
      <h1>Homepage</h1>
      <ul>
        {races.map((race) => (
          <li key={race.round}>
            <p>{race.raceName}</p>
            <p>{race.date}</p>
            <p>{race.time}</p>
          </li>
        ))}
      </ul>
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
