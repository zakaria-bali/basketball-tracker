import { TeamDetails } from 'src/app/core/models/nba-data.model';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-team-games-card',
  templateUrl: './team-games-card.component.html',
  styleUrls: ['./team-games-card.component.scss']
})
export class TeamGamesCardComponent implements OnInit {

  @Input()
  team: TeamDetails | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
