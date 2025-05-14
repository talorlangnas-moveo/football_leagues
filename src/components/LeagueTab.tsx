import React, { useState, useEffect } from "react";
import type { League } from "../types/interfaces/League";
import type { Team } from "../types/interfaces/Team";
import { getTeamsByLeagueName } from "../services/team.service";
import TeamsResults from "./TeamsResult";
import "../assets/styles/components/LeagueTab.scss";

interface LeagueTabProps {
  league: League;
}

const LeagueTab: React.FC<LeagueTabProps> = ({ league }) => {
  const [expanded, setExpanded] = useState(false);
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setLoading(true);
        const data = await getTeamsByLeagueName(league.name);
        setTeams(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load teams.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, [league.name]);

  return (
    <div
      className={`league-tab ${expanded ? "expanded" : ""}`}
      onClick={() => setExpanded((prev) => !prev)}
      
    >
      <img
        src={league.logoUrl}
        alt={`${league.name} logo`}
        className="league-tab__logo"
      />
      <h4 className="league-tab__name">{league.name}</h4>

      {expanded && (
        <div className="league-tab__dropdown">
          {loading && <p>Loading teams...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && teams.length > 0 && <TeamsResults teams={teams} />}
        </div>
      )}
    </div>
  );
};

export default LeagueTab;
