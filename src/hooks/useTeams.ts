import { useEffect, useState } from 'react';
import { getTeamsByLeagueId } from '../services/sportsApi';
import type { Team } from '../models/Team';

export const useTeamsByLeague = (leagueId: string) => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setLoading(true);
        const rawTeams = await getTeamsByLeagueId(leagueId);

        const processedTeams = rawTeams.map((team: Team): Team => ({
          id: team.id,
          name: team.name,
          logoUrl: team.logoUrl || team.fallbackLogo || '', 
        }));

        setTeams(processedTeams);
      } catch (err) {
        setError('Failed to fetch teams');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (leagueId) fetchTeams();
  }, [leagueId]);

  return { teams, loading, error };
};
