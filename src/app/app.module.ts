import { NbaApiInterceptor } from './core/interceptors/nba-api.interceptor';
import { TeamsTrackerModule } from './modules/teams-tracker/teams-tracker.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TeamsTrackerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NbaApiInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
