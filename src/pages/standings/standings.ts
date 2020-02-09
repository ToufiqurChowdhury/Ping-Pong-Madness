import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StandingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
  
  import * as _ from 'lodash';  
  import { AppApi } from '../../shared/shared';

@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html',
})
export class StandingsPage {
  allStandings: any[];
  standings: any[];
  team: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private appApi: AppApi) {

      this.team = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StandingsPage');

    let tourneyData = this.appApi.getCurrentTourney();
    this.standings = tourneyData.standings;

    this.allStandings = 
      _.chain(this.standings)
       .groupBy('division')
       .toPairs()
       .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
       .value();

    //  console.log('standings: ', this.standings);
    //  console.log('division standings: ', this.allStandings);

  }

}
