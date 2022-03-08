import RaceElement from '../RaceElement/RaceElement';
import styles from './RacesList.module.css';

interface RacesProps {
  races: {
    id: string;
    name: string;
    country: string;
    sessions: {
      gp: string;
    };
  }[];
}

const RacesList = ({ races }: RacesProps) => {
  return (
    <ul className={styles.racesList}>
      {races.map((race) => (
        <RaceElement
          key={race.id}
          name={race.name}
          country={race.country}
          raceTime={race.sessions.gp}
        />
      ))}
    </ul>
  );
};

export default RacesList;
