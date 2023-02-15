import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeamsTrackerRoutingModule } from './teams-tracker-routing.module';
import { TeamsTrackerShellComponent } from './teams-tracker-shell.component';
import { SelectTeamComponent } from './components/select-team/select-team.component';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { GameResultIconComponent } from './components/game-result-icon/game-result-icon.component';
import { TeamCardContentComponent } from './components/team-card-content/team-card-content.component';


@NgModule({
  declarations: [
    TeamsTrackerShellComponent,
    SelectTeamComponent,
    TeamsListComponent,
    GameResultIconComponent,
    TeamCardContentComponent
  ],
  imports: [
    TeamsTrackerRoutingModule,
    SharedModule
  ]
})
export class TeamsTrackerModule { }
