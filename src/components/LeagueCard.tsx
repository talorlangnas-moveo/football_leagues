import React, { useState } from 'react';
import '../assets/styles/LeagueCard.scss';
import { useTeamsByLeague } from '../hooks/useTeams';
import TeamsResults from './TeamsResult';
import type { LeagueInfo } from '../data/leagues';

interface LeagueCardProps extends LeagueInfo {}

const LeagueCard: React.FC<LeagueCardProps> = ({ id, name, fallbackLogo }) => {
  const [expanded, setExpanded] = useState(false);
  const { teams, loading, error } = useTeamsByLeague(id);

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="league-card" onClick={toggleExpanded} style={{ cursor: 'pointer' }}>
      <img src={fallbackLogo} alt={`${name} logo`} className="league-card__logo" />
      <h3 className="league-card__name">{name}</h3>

      {expanded && (
        <div className="league-card__teams">
          {loading && <p>Loading teams...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && <TeamsResults teams={teams} />}
        </div>
      )}
    </div>
  );
};

export default LeagueCard;
