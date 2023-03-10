import { NBADataService } from './../../core/services/nba-data.service';
import { TeamDetails } from 'src/app/core/models/nba-data.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-games-history-shell',
  templateUrl: './games-history-shell.component.html',
  styleUrls: ['./games-history-shell.component.scss'],
})
export class GamesHistoryShellComponent implements OnInit {
  teamDetails: TeamDetails | undefined;
  teamCode: number | undefined;

  constructor(
    private nBADataService: NBADataService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    this.teamCode = Number(this.route.snapshot.params['teamCode']);
    if (this.teamCode) {
      this.teamDetails = await this.nBADataService.getTeamDetails(
        this.teamCode
      );
    }
  }
}
