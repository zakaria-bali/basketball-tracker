import { Observable, Subscription } from 'rxjs';
import { NBADataService } from './../../core/services/nba-data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Team, TeamDetails } from 'src/app/core/models/nba-data.model';

@Component({
  selector: 'app-teams-tracker-shell',
  templateUrl: './teams-tracker-shell.component.html',
  styleUrls: ['./teams-tracker-shell.component.scss']
})
export class TeamsTrackerShellComponent implements OnInit {
  nBATeams$: Observable<Team[]> | undefined

  trackedTeams: TeamDetails[] = [];

  constructor(private nBADataService: NBADataService) { }

  ngOnInit(): void {
    this.nBATeams$ = this.nBADataService.getAllNBATeams();
    this.trackedTeams = this.nBADataService.getStoredTrackedTeams();
  }

  async onTrackTeam(team: Team): Promise<void>{
    const isTeamExist = this.trackedTeams.some((item: Team) => item.id === team.id)
    if ( !isTeamExist ) {
      const teamDetails: TeamDetails = await this.nBADataService.getTeamDetailsWithGames(team);
      this.trackedTeams.push(teamDetails);
      this.nBADataService.updateTrackedTeamsStorage(this.trackedTeams);
    }
  }

  onRemoveTeam(id: number): void {
    this.trackedTeams = this.trackedTeams.filter((team: TeamDetails) => team.id !== id)
    this.nBADataService.updateTrackedTeamsStorage(this.trackedTeams);
  }

}
