import { Observable } from 'rxjs';
import { NBADataService } from './../../core/services/nba-data.service';
import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/core/models/nba-data.model';

@Component({
  selector: 'app-teams-tracker-shell',
  templateUrl: './teams-tracker-shell.component.html',
  styleUrls: ['./teams-tracker-shell.component.scss']
})
export class TeamsTrackerShellComponent implements OnInit {

  nBATeams$: Observable<Team[]> | undefined

  constructor(private nBADataService: NBADataService) { }

  ngOnInit(): void {
    this.nBATeams$ = this.nBADataService.getAllNBATeams();
  }

  onTrackTeam(team: Team): void {
    // console.log('Selected team');
    // console.log(team.division);
  }

}
