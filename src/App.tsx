import React from 'react';
import './App.css';
import LeagueCard from './components/LeagueCard';
import { useLeagueCards } from './hooks/useLeagueCards';

function App() {
  const leagues = useLeagueCards();

  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h1>Leagues</h1>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          marginTop: '1rem',
        }}
      >
        {leagues.map((league) => (
          <LeagueCard
            key={league.id}
            name={league.name}
            logoUrl={league.fallbackLogo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

// LeaguesLobby
  // LeaguesTabs => league.service.ts => fetch leagues and return to Tabs => onClick Tab => 
    // TeamsList => teams.service.ts => fetch teams and return to TeamsList
        // TeamCard


