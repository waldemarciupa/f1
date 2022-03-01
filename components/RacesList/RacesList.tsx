import React from 'react';
import styles from './RacesList.module.css';

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

const RacesList = ({ races }: RacesProps) => {
  return (
    <ul>
      {races.map((race) => (
        <li key={race.circuit.id} className={styles.raceElement}>
          <p>{race.name}</p>
          <p>{new Date(`${race.date}T${race.time}`).toLocaleString()}</p>
        </li>
      ))}
    </ul>
  );
};

export default RacesList;
