import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { GamesHistoryRoutingModule } from './games-history-routing.module';


@NgModule({
  declarations: [],
  imports: [
    GamesHistoryRoutingModule,
    SharedModule
  ]
})
export class GamesHistoryModule { }
