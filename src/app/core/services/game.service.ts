import { Injectable } from '@angular/core';
import { Game, TeamAvgPoints } from '../models/nba-data.model';

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

  getTeamAvgPoints(id: number, games: Game[]): TeamAvgPoints{
    if ( games.length === 0 ) {
      return {
        avg_pts_scored: 0,
        avg_pts_conceded: 0
      }
    }

    let teamScoredPoints = 0;
    let teamConcededPoints = 0;

    for (let game of games) {
      if (this.isTeamHome(id, game)) {
        teamScoredPoints += game.home_team_score;
        teamConcededPoints += game.visitor_team_score;
      } else {
        teamScoredPoints += game.visitor_team_score;
        teamConcededPoints += game.home_team_score;
      }
    }

    const avgPtsScored = Math.round(teamScoredPoints/games.length)
    const avgPtsConceded = Math.round(teamConcededPoints/games.length)
    return {
      avg_pts_scored: avgPtsScored,
      avg_pts_conceded: avgPtsConceded
    };
  }
}
