import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

  import { TeamHomePage, MapPage } from '../pages';
  import { AppApi } from '../../shared/shared';

  declare var window: any;

@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  game: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private appApi: AppApi) {
    this.game = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
    this.game.gameTime = Date.parse(this.game.time);
  }

  teamTapped(teamId) {
    let tourneyData = this.appApi.getCurrentTourney();
    let team = tourneyData.teams.find(t=> t.id === teamId);
    this.navCtrl.push(TeamHomePage, team);
  }

  goToDirection(){
      let tourneyData = this.appApi.getCurrentTourney();
      let location = tourneyData.locations[this.game.locationId];
      window.location = 'geo:${location.latitude},${location.longitude};u=35'
  }

  goToMap(){
    this.navCtrl.push(MapPage, this.game);
  }

  isWinner(score1, score2){
    return Number(score1) > Number(score2);
  }

}
