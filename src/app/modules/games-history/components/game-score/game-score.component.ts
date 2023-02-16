import { Game } from 'src/app/core/models/nba-data.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-score',
  templateUrl: './game-score.component.html',
  styleUrls: ['./game-score.component.scss'],
})
export class GameScoreComponent implements OnInit {
  @Input()
  game: Game | undefined;

  constructor() {}

  ngOnInit(): void {}
}
