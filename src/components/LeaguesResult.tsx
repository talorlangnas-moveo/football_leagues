import React from 'react';
import LeagueTab from './LeagueTab';
import type { League } from '../types/interfaces/League';
import '../assets/styles/components/LeaguesResult.scss';

interface LeaguesResultProps {
  leagues: League[];
}

const LeaguesResult: React.FC<LeaguesResultProps> = ({ leagues }) => {
  return (
    <div className="leagues-result">
      {leagues.map((league) => (
        <LeagueTab key={league.id} league={league} />
      ))}
    </div>
  );
};

export default LeaguesResult;
