import React from 'react';
import TeamCard from './TeamCard';
import type { Team } from '../types/interfaces/Team';
// import '../assets/styles/components/TeamsResults.scss';

interface TeamsResultsProps {
  teams: Team[];
}

const TeamsResults: React.FC<TeamsResultsProps> = ({ teams }) => {
  return (
    <div className="teams-results">
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
};

export default TeamsResults;
