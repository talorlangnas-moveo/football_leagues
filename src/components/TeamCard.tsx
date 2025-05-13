import React from 'react';
import '../assets/styles/components/TeamCard.scss';
import type { Team } from '../types/interfaces/Team';

interface TeamCardProps {
  team: Team;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <div className="team-card">
      <img src={team.logoUrl} alt={`${name} logo`} className="team-card__logo" />
      <h4 className="team-card__name">{team.name}</h4>
    </div>
  );
};

export default TeamCard;
