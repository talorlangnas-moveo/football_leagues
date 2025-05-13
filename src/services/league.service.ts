import axios from 'axios';
import type { League } from '../types/interfaces/League';
import fifaLogo from '../assets/imges/fifa.png';

const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/3';

interface RawLeague {
  idLeague: string;
  strLeague: string;
  strSport: string;
}

export const getTopLeagues = async (num: number = 5): Promise<League[]> => {
  try {
    const response = await axios.get<{ leagues: RawLeague[] }>(`${BASE_URL}/all_leagues.php`);

    const soccerLeagues = response.data.leagues
      .filter((league) => league.strSport === 'Soccer')
      .slice(0, num)
      .map((league): League => ({
        id: league.idLeague,
        name: league.strLeague,
        logoUrl: fifaLogo
      }));

    return soccerLeagues;
  } catch (error) {
    console.error('Failed to fetch top leagues:', error);
    return [];
  }
};

export const getAllCountryNames = async (): Promise<string[]> => {
  try {
    const res = await axios.get<{ countries: { name_en: string }[] }>(`${BASE_URL}/all_countries.php`);
    return res.data.countries.map((c) => c.name_en);
  } catch (err) {
    console.error('Failed to fetch countries:', err);
    return [];
  }
};

export const getLeagueBadgeById = async (leagueId: string): Promise<string | null> => {    
  try {
    const response = await axios.get(`${BASE_URL}/lookupleague.php?id=${leagueId}`);
    const league = response.data?.leagues?.[0];

    return league?.strBadge || null;
  } catch (error) {
    console.error(`Failed to fetch badge for league ID ${leagueId}:`, error);
    return null;
  }
};

export const getLeaguesDetails = async (num: number = 5): Promise<League[]> => {
  const leagues = await getTopLeagues(num);
  return leagues;
};

export const getLeagueCountryById = async (leagueId: string): Promise<string | null> => {    
  try {
    // Free‐tier trick: fetch every soccer league in one go
    const response = await axios.get<{ leagues: Array<{ idLeague: string; strCountry: string }> }>(
      `${BASE_URL}/search_all_leagues.php`,
      { params: { s: 'Soccer' } }
    );

    // Find the league object that matches your ID
    console.log('response', response.data.leagues);
    
    const league = response.data.leagues.find((l) => l.idLeague === leagueId);
    return league?.strCountry || null;
  } catch (err) {
    console.error(`Failed to fetch country for league ${leagueId}`, err);
    return null;
  }
};