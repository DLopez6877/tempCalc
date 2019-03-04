import { MlsPlayerStats } from './mls-player-stats';

export interface MlsPlayer {
  id: number;
  first_name: string;
  last_name: string;
  known_name: string;
  squad_id: number;
  squad_name: string;
  cost: number;
  status: string;
  stats: MlsPlayerStats;
  positions: number[];
  is_bye: number;
  locked: number;
}
