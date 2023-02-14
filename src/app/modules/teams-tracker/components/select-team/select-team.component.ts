import { Team } from './../../../../core/models/nba-data.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-team',
  templateUrl: './select-team.component.html',
  styleUrls: ['./select-team.component.scss']
})
export class SelectTeamComponent implements OnInit {

  @Input()
  teams: Team[] = []


  constructor() { }

  ngOnInit(): void {
  }

}
