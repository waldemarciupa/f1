import React from 'react';
import RaceElement from './RaceElement';

interface RacesProps {
  races: {
    id: String;
    name: String;
    sessions: {
      gp: String;
    };
  }[];
}

const RacesList = ({ races }: RacesProps) => {
  return (
    <ul>
      {races.map((race) => (
        <RaceElement
          key={`${race.id}`}
          name={race.name}
          sessions={race.sessions.gp}
        />
      ))}
    </ul>
  );
};

export default RacesList;
