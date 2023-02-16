import { Component, OnInit, Input } from '@angular/core';
import { TeamDetails } from 'src/app/core/models/nba-data.model';

@Component({
  selector: 'app-team-games-card-content',
  templateUrl: './team-games-card-content.component.html',
  styleUrls: ['./team-games-card-content.component.scss'],
})
export class TeamGamesCardContentComponent implements OnInit {
  @Input()
  team: TeamDetails | undefined;

  constructor() {}

  ngOnInit(): void {}
}
