export interface LeagueInfo {
  id: string;
  name: string;
  fallbackLogo: string;
}

import premierLeague from '../assets/imges/premierleague.png';
import laLiga from '../assets/imges/laliga.png';
import bundesliga from '../assets/imges/bundesliga.png';
import serieA from '../assets/imges/seriea.png';
import mls from '../assets/imges/mls.png';

export const leaguesData: LeagueInfo[] = [
  {
    id: '4328',
    name: 'Premier League',
    fallbackLogo: premierLeague,
  },
  {
    id: '4335',
    name: 'La Liga',
    fallbackLogo: laLiga,
  },
  {
    id: '4331',
    name: 'Bundesliga',
    fallbackLogo: bundesliga,
  },
  {
    id: '4332',
    name: 'Serie A',
    fallbackLogo: serieA,
  },
  {
    id: '4346',
    name: 'MLS',
    fallbackLogo: mls,
  },
];
