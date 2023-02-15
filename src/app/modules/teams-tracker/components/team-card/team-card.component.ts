import { GameService } from './../../../../core/services/game.service';
import { TeamAvgPoints } from './../../../../core/models/nba-data.model';
import { TeamDetails } from 'src/app/core/models/nba-data.model';
import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit, OnChanges {
  @Input()
  team: TeamDetails | undefined;

  @Output()
  removeTeam: EventEmitter<number> = new EventEmitter<number>();

  constructor(private gameService: GameService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.team) {
      const teamAvgPoints: TeamAvgPoints = this.gameService.getTeamAvgPoints(this.team.id, this.team.games);
      this.team = { ...this.team, ...teamAvgPoints, long_name: `${this.team.full_name} [${this.team.abbreviation}]` };

    }
  }

  ngOnInit(): void {
  }

  remove(): void {
    if (this.team) {
      this.removeTeam.emit(this.team.id);
    }
  }

}
