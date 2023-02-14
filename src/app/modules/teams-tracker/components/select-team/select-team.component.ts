import { Team } from './../../../../core/models/nba-data.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  selectedTeam: FormControl = new FormControl('');


  constructor() { }

  ngOnInit(): void {
  }

  onTrackTeamClicked() {
    if (this.selectedTeam.value) {
      this.trackTeam.emit(this.selectedTeam.value);
    }

  }

}
