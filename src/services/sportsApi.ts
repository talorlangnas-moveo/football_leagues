import axios from 'axios';

const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/3';

export const getLeagueLogo = async (leagueId: string): Promise<string | null> => {
  try {
    const response = await axios.get(`${BASE_URL}/lookupleague.php?id=${leagueId}`);
    const league = response.data?.leagues?.[0];

    return league?.strBadge || null;
  } catch (error) {
    console.error('Failed to fetch league logo:', error);
    return null;
  }
};
