import { useMemo } from 'react';
import { leaguesData } from '../data/leagues';
import type { LeagueInfo } from '../data/leagues';

export const useLeagueCards = (): LeagueInfo[] => {
  return useMemo(() => leaguesData, []);
};
