import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { GamesHistoryRoutingModule } from './games-history-routing.module';
import { GamesHistoryShellComponent } from './games-history-shell.component';
import { GameScoreComponent } from './components/game-score/game-score.component';
import { TeamGamesCardContentComponent } from './components/team-games-card-content/team-games-card-content.component';

@NgModule({
  declarations: [
    GamesHistoryShellComponent,
    GameScoreComponent,
    TeamGamesCardContentComponent,
  ],
  imports: [GamesHistoryRoutingModule, SharedModule],
})
export class GamesHistoryModule {}
