import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { GamesHistoryRoutingModule } from './games-history-routing.module';
import { GamesHistoryShellComponent } from './games-history-shell.component';
import { GameScoreComponent } from './components/game-score/game-score.component';
import { TeamGamesCardComponent } from './components/team-games-card/team-games-card.component';


@NgModule({
  declarations: [
    GamesHistoryShellComponent,
    GameScoreComponent,
    TeamGamesCardComponent
  ],
  imports: [
    GamesHistoryRoutingModule,
    SharedModule
  ]
})
export class GamesHistoryModule { }
