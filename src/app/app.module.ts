import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { MyTeamsPage, TournamentsPage, TeamsPage, TeamDetailPage, GamePage, StandingsPage, TeamHomePage, MapPage } from '../pages/pages'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    // HomePage,
    // ListPage,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage,
    GamePage, 
    StandingsPage, 
    TeamHomePage,
    MapPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBbsOlMryAHu2ESwHHSwrDBIUU7fiENNoM' })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage,
    // ListPage,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage,
    GamePage, 
    StandingsPage, 
    TeamHomePage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
