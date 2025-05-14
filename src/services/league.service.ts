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

