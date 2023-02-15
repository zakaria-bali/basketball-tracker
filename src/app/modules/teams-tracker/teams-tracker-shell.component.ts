import { TeamDetails } from './../../core/models/nba-data.model';
import { Observable, Subscription } from 'rxjs';
import { NBADataService } from './../../core/services/nba-data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Team } from 'src/app/core/models/nba-data.model';

@Component({
  selector: 'app-teams-tracker-shell',
  templateUrl: './teams-tracker-shell.component.html',
  styleUrls: ['./teams-tracker-shell.component.scss']
})
export class TeamsTrackerShellComponent implements OnInit, OnDestroy {
  teamGamesSubscription$: Subscription | null = null;
  nBATeams$: Observable<Team[]> | undefined


  trackedTeams: TeamDetails[] = [];

  constructor(private nBADataService: NBADataService) { }

  ngOnInit(): void {
    this.nBATeams$ = this.nBADataService.getAllNBATeams();
  }

  ngOnDestroy(): void {
    this.teamGamesSubscription$?.unsubscribe();
  }

  onTrackTeam(team: Team): void {
     this.teamGamesSubscription$ = this.nBADataService.getTeamLast12DaysGames(team.id).subscribe(
      (response) => {
        this.trackedTeams.push({ ...team, games: response })
      }
    )
  }

  onRemoveTeam(id: number): void {
    this.trackedTeams = this.trackedTeams.filter((team: TeamDetails) => team.id !== id)
  }

}
