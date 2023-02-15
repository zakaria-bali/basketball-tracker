import { TeamDetails } from 'src/app/core/models/nba-data.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {
  @Input()
  team: TeamDetails | undefined;

  @Output()
  removeTeam: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  remove(): void {
    if (this.team) {
      this.removeTeam.emit(this.team.id);
    }
  }

}
