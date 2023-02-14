import { Team } from './../../../../core/models/nba-data.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';;

@Component({
  selector: 'app-select-team',
  templateUrl: './select-team.component.html',
  styleUrls: ['./select-team.component.scss']
})
export class SelectTeamComponent implements OnInit {

  @Input()
  teams: Team[] = []

  @Output()
  trackTeam: EventEmitter<Team> = new EventEmitter<Team>();

  selectedTeam: Team | null = null;


  constructor() { }

  ngOnInit(): void {
  }

  onTrackTeamClicked(): void {
    if (this.selectedTeam) {
      this.trackTeam.emit(this.selectedTeam);
    }
  }

}
