import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { AllTeamsResponse, Team } from '../models/nba-data.model';

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
}
