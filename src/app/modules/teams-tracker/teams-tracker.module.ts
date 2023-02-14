import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeamsTrackerRoutingModule } from './teams-tracker-routing.module';
import { TeamsTrackerShellComponent } from './teams-tracker-shell.component';
import { SelectTeamComponent } from './components/select-team/select-team.component';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { GameResultIconComponent } from './components/game-result-icon/game-result-icon.component';


@NgModule({
  declarations: [
    TeamsTrackerShellComponent,
    SelectTeamComponent,
    TeamCardComponent,
    TeamsListComponent,
    GameResultIconComponent
  ],
  imports: [
    TeamsTrackerRoutingModule,
    SharedModule
  ]
})
export class TeamsTrackerModule { }
