import React, { useEffect, useState } from 'react';
import { getTopLeagues } from '../services/league.service';
import LeaguesResult from '../components/LeaguesResult';
import type { League } from '../types/interfaces/League';

const LeagueLobby: React.FC = () => {
  const [leagues, setLeagues] = useState<League[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const data = await getTopLeagues(); // default: top 5
        setLeagues(data);
      } catch (err) {
        setError('Failed to load leagues');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeagues();
  }, []);

  if (loading) return <p>Loading leagues...</p>;
  if (error) return <p>{error}</p>;

  return <LeaguesResult leagues={leagues} />;
};

export default LeagueLobby;
