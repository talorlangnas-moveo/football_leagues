import React, { useState } from 'react';
import './App.css';
import LeagueCard from './components/LeagueCard';
import TeamsResults from './components/TeamsResult'
import { useLeagueCards } from './hooks/useLeagueCards';
import { useTeamsByLeague } from './hooks/useTeams'
import { leaguesData } from './data/leagues';

function App() {
  const [selectedLeagueId, setSelectedLeagueId] = useState<string | null>(null);
  const leagues = useLeagueCards();
  const { teams, loading, error } = useTeamsByLeague(selectedLeagueId || '');

  return (
    <div className="app-container">
      <h1>Football Leagues</h1>

      {!selectedLeagueId && (
        <div className="league-list">
          {leaguesData.map((league) => (
            <LeagueCard
              key={league.id}
              name={league.name}
              logoUrl={league.fallbackLogo}
              onClick={() => setSelectedLeagueId(league.id)}
            />
          ))}
        </div>
      )}

      {selectedLeagueId && (
        <>
          <button onClick={() => setSelectedLeagueId(null)}>← Back</button>
          {loading && <p>Loading teams...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && <TeamsResults teams={teams} />}
        </>
      )}
    </div>
  );
}

export default App;
