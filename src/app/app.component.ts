import { Component, ViewChild } from '@angular/core';
import { Events, LoadingController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule} from '@angular/http';
//import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

import {MyTeamsPage, TeamHomePage, TournamentsPage} from '../pages/pages';
import { AppApi, UserSettings } from '../shared/shared';

@Component({
  templateUrl: 'app.html',
    providers: [
    AppApi,
    UserSettings,
    HttpModule,
    //GOOGLE_MAPS_DIRECTIVES
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  favoriteTeams: any[];
  rootPage = MyTeamsPage;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private appApi: AppApi,
    private userSettings: UserSettings,
    private loadingController: LoadingController,
    private events: Events) {

    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.refreshFavorites();
      this.events.subscribe('favorites:changed', () => this.refreshFavorites());

      // this.userSettings.initStorage().then(() => {
      //         this.rootPage = MyTeamsPage;
      //         this.refreshFavorites();
      //         this.events.subscribe('favorites:changed', () => this.refreshFavorites());
      //       });

    });

  }

  /*openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }*/


  refreshFavorites(){
    this.favoriteTeams = this.userSettings.getAllFavorites();
  }

  goHome(){
    this.nav.push(MyTeamsPage);
  }

  goToTournaments(){
    this.nav.push(TournamentsPage);
  }

  goToTeam(favorite){
   let loader = this.loadingController.create({
        content: 'Getting data...',
        dismissOnPageChange: true
    });
    loader.present();
    this.appApi.getTournamentsData(favorite.tournamentId)
        .subscribe(t => this.nav.push(TeamHomePage, favorite.team));

   }

}
