import axios from 'axios';
import type { Team } from '../types/interfaces/Team';

const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/3';

interface RawTeam {
  idTeam: string;
  strTeam: string;
  strBadge: string;
}

export const getTeamsByLeagueName = async (leagueName: string): Promise<Team[]> => {
  try {
    const response = await axios.get<{ teams: RawTeam[] }>(
      `${BASE_URL}/search_all_teams.php`,
      { params: { l: leagueName } }
    );

    const teams = response.data.teams || [];

    return teams.map((team): Team => ({
      id: team.idTeam,
      name: team.strTeam,
      logoUrl: team.strBadge || '',
    }));
  } catch (error) {
    console.error(`Failed to fetch teams for league: ${leagueName}`, error);
    return [];
  }
};
