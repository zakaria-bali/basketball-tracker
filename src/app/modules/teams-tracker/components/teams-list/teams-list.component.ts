import { TeamDetails } from './../../../../core/models/nba-data.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {

  @Input()
  trackedTeams: TeamDetails[] = [];

  @Output()
  removeTeam: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  onRemoveTeam(id: number): void {
      this.removeTeam.emit(id);
  }

}
