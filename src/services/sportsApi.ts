import axios from 'axios';

const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/3';

export const getTeamsByLeagueId = async (leagueId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/lookup_all_teams.php?id=${leagueId}`);
    return response.data?.teams || [];
  } catch (error) {
    console.error(`Error fetching teams for league ID ${leagueId}:`, error);
    return [];
  }
};