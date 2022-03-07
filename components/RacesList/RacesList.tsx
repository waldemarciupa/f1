import React from 'react';
import RaceElement from './RaceElement';

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
    <ul>
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
