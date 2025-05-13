import React from 'react';
import '../assets/styles/LeagueCard.scss';

interface LeagueCardProps {
  name: string;
  logoUrl: string;
  onClick?: () => void;
}

const LeagueCard: React.FC<LeagueCardProps> = ({ name, logoUrl, onClick }) => {
  return (
    <div className="league-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <img
        src={logoUrl}
        alt={`${name} logo`}
        className="league-card__logo"
      />
      <h3 className="league-card__name">{name}</h3>
    </div>
  );
};

export default LeagueCard;
