import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Matches } from './pages/matches/matches';
import { Teams } from './pages/teams/teams';
import { Players } from './pages/players/players';
import { History } from './pages/history/history';
import { Standings } from './pages/standings/standings';
import { Predictor } from './pages/predictor/predictor';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'matches', component: Matches },
  { path: 'teams', component: Teams },
  { path: 'players', component: Players },
  { path: 'history', component: History },
  { path: 'standings', component: Standings },
  { path: 'predictor', component: Predictor },
  { path: '**', redirectTo: '' }
];