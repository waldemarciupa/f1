import React from 'react';
import styles from './RacesList.module.css';

interface RaceProps {
  name: String;
  sessions: String;
}

const RaceElement = ({ name, sessions }: RaceProps) => {
  return (
    <li className={styles.raceElement}>
      <p>{name}</p>
      <p>{new Date(`${sessions}`).toLocaleString()}</p>
    </li>
  );
};

export default RaceElement;
