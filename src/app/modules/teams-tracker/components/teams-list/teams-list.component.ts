import { TeamDetails } from './../../../../core/models/nba-data.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {

  @Input()
  trackedTeams: TeamDetails[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
