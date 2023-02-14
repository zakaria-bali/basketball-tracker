import { TeamDetails } from 'src/app/core/models/nba-data.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {
  @Input()
  team: TeamDetails | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
