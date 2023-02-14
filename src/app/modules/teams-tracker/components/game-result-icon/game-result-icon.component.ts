import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/core/models/nba-data.model';
import { GameService } from 'src/app/core/services/game.service';

@Component({
  selector: 'app-game-result-icon',
  templateUrl: './game-result-icon.component.html',
  styleUrls: ['./game-result-icon.component.scss']
})
export class GameResultIconComponent implements OnInit {
  @Input()
  id: number | undefined;

  @Input()
  game: Game | undefined;

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
  }

}
