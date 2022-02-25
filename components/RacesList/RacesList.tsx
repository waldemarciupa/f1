import React from 'react';
import styles from './RacesList.module.css';

interface RacesProps {
  races: {
    raceName: string;
    round: string;
    date: Date;
    time: Date;
  }[];
}

const RacesList = ({ races }: RacesProps) => {
  return (
    <ul>
      {races.map((race) => (
        <li key={race.round} className={styles.raceElement}>
          <p>{race.raceName}</p>
          <p>{new Date(`${race.date}T${race.time}`).toLocaleString()}</p>
        </li>
      ))}
    </ul>
  );
};

export default RacesList;
