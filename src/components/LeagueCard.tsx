import React from 'react';
import '../assets/styles/LeagueCard.scss';

interface LeagueCardProps {
  /** Name of the league to display */
  name: string;
  /** URL of the league's logo image */
  logoUrl: string;
}

/**
 * Displays a card for a football league showing its logo and name.
 */
const LeagueCard: React.FC<LeagueCardProps> = ({ name, logoUrl }) => {
  return (
    <div className="league-card">
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
