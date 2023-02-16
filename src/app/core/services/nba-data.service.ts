import {
  GamesResponse,
  TeamDetails,
  TeamAvgPoints,
} from './../models/nba-data.model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable, pipe } from 'rxjs';
import { AllTeamsResponse, Game, Team } from '../models/nba-data.model';
import { GameService } from './game.service';

@Injectable({
  providedIn: 'root',
})
export class NBADataService {
  constructor(private http: HttpClient, private gameService: GameService) {}

  getAllNBATeams(): Observable<Team[]> {
    return this.http
      .get<AllTeamsResponse>(`${environment.BASE_URL}/teams`)
      .pipe(map((response: AllTeamsResponse): Team[] => response.data));
  }

  getTeam(id: number): Observable<Team> {
    return this.http.get<Team>(`${environment.BASE_URL}/teams/${id}`);
  }

  getTeamLast12DaysGames(id: number): Observable<Game[]> {
    const last12DaysDateQueryParam = this.generateLast12DaysQueryParam();
    return this.http
      .get<GamesResponse>(
        `${environment.BASE_URL}/games?page=0&dates[]=${last12DaysDateQueryParam}&per_page=12&team_ids[]=${id}`
      )
      .pipe(map((response: GamesResponse): Game[] => response.data));
  }

  getTeamDetailsWithGames(team: Team): Promise<TeamDetails> {
    //* we create a promise because to promise is deprecated
    const promise: Promise<TeamDetails> = new Promise((resolve, reject) => {
      this.getTeamLast12DaysGames(team.id).subscribe({
        next: (games: Game[]) => {
          const teamAvgPoints: TeamAvgPoints =
            this.gameService.getTeamAvgPoints(team.id, games);
          resolve({
            ...team,
            ...teamAvgPoints,
            games: games,
            long_name: `${team.full_name} [${team.abbreviation}]`,
          });
        },
        error: (error) => reject(error),
      });
    });

    return promise;
  }

  getTeamDetailsById(id: number): Observable<TeamDetails> {
    return this.getTeam(id).pipe(
      mergeMap((team: Team) => {
        return this.getTeamLast12DaysGames(id).pipe(
          map((games: Game[]) => {
            const teamAvgPoints: TeamAvgPoints =
              this.gameService.getTeamAvgPoints(id, games);
            return {
              ...team,
              ...teamAvgPoints,
              games: games,
              long_name: `${team.full_name} [${team.abbreviation}]`,
            };
          })
        );
      })
    );
  }

  getTeamDetails(id: number): Promise<TeamDetails> {
    const promise: Promise<TeamDetails> = new Promise<TeamDetails>(
      (resolve, reject) => {
        const team = this.getStoredTeamDetails(id);
        if (team) {
          resolve(team);
        } else {
          this.getTeamDetailsById(id).subscribe({
            next: (teamDetails: TeamDetails) => {
              resolve(teamDetails);
            },
            error: (error) => reject(error),
          });
        }
      }
    );

    return promise;
  }

  generateLast12DaysQueryParam(): string {
    const today = new Date();
    const queryParamDates = [];

    for (let i = 0; i < 12; i++) {
      const date = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
      const dateString = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
      queryParamDates.push(dateString);
    }

    return queryParamDates.join('&dates[]=');
  }

  updateTrackedTeamsStorage(trackedTeams: TeamDetails[]): void {
    localStorage.setItem('trackedItems', JSON.stringify(trackedTeams));
  }

  getStoredTrackedTeams(): TeamDetails[] {
    const trackedTeams: string | null = localStorage.getItem('trackedItems');

    if (trackedTeams) {
      return JSON.parse(trackedTeams);
    }

    return [];
  }

  getStoredTeamDetails(id: number): TeamDetails | undefined {
    const storedTeams: TeamDetails[] = this.getStoredTrackedTeams();
    const team = storedTeams.find((team: TeamDetails) => team.id === id);
    if (team) {
      return team;
    }
    
    return undefined;
  }
}
