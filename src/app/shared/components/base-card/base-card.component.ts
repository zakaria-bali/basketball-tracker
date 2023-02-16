import { TeamDetails } from 'src/app/core/models/nba-data.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss'],
})
export class BaseCardComponent implements OnInit {
  @Input()
  team: TeamDetails | undefined;

  @Input()
  isResult: boolean = false;

  @Output()
  removeTeam: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  remove(): void {
    if (this.team) {
      this.removeTeam.emit(this.team.id);
    }
  }
}
