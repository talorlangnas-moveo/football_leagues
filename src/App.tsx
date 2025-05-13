import LeagueLobby from './pages/LeaguesLobby'

function App() {
  return (
    <div>
      <h1>Top Football Leagues</h1>
      <LeagueLobby />
    </div>
  );
}

export default App;

// LeaguesLobby
  // LeaguesTabs => league.service.ts => fetch leagues and return to Tabs => onClick Tab => 
    // TeamsList => teams.service.ts => fetch teams and return to TeamsList
        // TeamCard


