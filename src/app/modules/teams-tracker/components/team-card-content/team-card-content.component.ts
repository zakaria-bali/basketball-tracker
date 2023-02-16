import { Component, OnInit, Input } from '@angular/core';
import { TeamDetails } from 'src/app/core/models/nba-data.model';

@Component({
  selector: 'app-team-card-content',
  templateUrl: './team-card-content.component.html',
  styleUrls: ['./team-card-content.component.scss'],
})
export class TeamCardContentComponent implements OnInit {
  @Input()
  team: TeamDetails | undefined;

  constructor() {}

  ngOnInit(): void {}
}
