import { GamesResponse, TeamDetails } from './../models/nba-data.model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { AllTeamsResponse, Game, Team } from '../models/nba-data.model';

@Injectable({
  providedIn: 'root'
})
export class NBADataService {

  constructor(private http: HttpClient) { }

  getAllNBATeams(): Observable<Team[]> {
    return this.http.get<AllTeamsResponse>(`${environment.BASE_URL}/teams`).pipe(
      map((response: AllTeamsResponse): Team[] => response.data)
    )
  }

  getTeamLast12DaysGames(id: number): Observable<Game[]> {
    const last12DaysDateQueryParam = this.generateLast12DaysQueryParam();
    return this.http.get<GamesResponse>(`${environment.BASE_URL}/games?page=0&dates[]=${last12DaysDateQueryParam}&per_page=12&team_ids[]=${id}`).pipe(
      map((response: GamesResponse): Game[] => response.data)
    );
  }

  generateLast12DaysQueryParam(): string {
    const today = new Date();
    const queryParamDates = [];

    for (let i = 0; i < 12; i++) {
      const date = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
      const dateString = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
      queryParamDates.push(dateString);
    }

    return queryParamDates.join('&dates[]=');
  }

  updateTrackedTeamsStorage(trackedTeams: TeamDetails[]): void{
    localStorage.setItem('trackedItems', JSON.stringify(trackedTeams))
  }

  getStoredTrackedTeams(): TeamDetails[] {
    const trackedTeams: string | null = localStorage.getItem('trackedItems');

    if (trackedTeams) {
      return JSON.parse(trackedTeams)
    }

    return []

  }
}
