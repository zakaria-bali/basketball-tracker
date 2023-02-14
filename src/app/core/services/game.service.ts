import { Injectable } from '@angular/core';
import { Game } from '../models/nba-data.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  isHomeTeamWin(game: Game): boolean {
    if (game.home_team_score > game.visitor_team_score) {
      return true;
    }
    return false;
  }

  isVisitorTeamWin(game: Game): boolean {
    if (game.home_team_score < game.visitor_team_score) {
      return true;
    }
    return false;
  }

  isTeamHome(id: number, game: Game): boolean {
    if (id === game.home_team.id) {
      return true;
    }

    return false;
  }

  getTeamResult(id: number, game: Game): 'L' | 'D' | 'W' {
    if (this.isTeamHome(id, game)) {
      if (this.isHomeTeamWin(game)) {
        return 'W';
      }

      if (this.isVisitorTeamWin(game)) {
        return 'L'
      }
    } else {
      if (this.isHomeTeamWin(game)) {
        return 'L';
      }

      if (this.isVisitorTeamWin(game)) {
        return 'W'
      }
    }

    return 'D'

  }
}
