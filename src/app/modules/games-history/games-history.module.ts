import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { GamesHistoryRoutingModule } from './games-history-routing.module';
import { GamesHistoryShellComponent } from './games-history-shell.component';


@NgModule({
  declarations: [
    GamesHistoryShellComponent
  ],
  imports: [
    GamesHistoryRoutingModule,
    SharedModule
  ]
})
export class GamesHistoryModule { }
